import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import { chromium } from 'playwright';

(async () => {
  try {
    console.log("Starting AI background removal...");
    const imagePath = '/home/clawuser/.openclaw/media/inbound/d121770b-cb30-4f62-a8a8-a3d87ba84994.jpg';
    const imageBuffer = fs.readFileSync(imagePath);
    const blob = new Blob([imageBuffer], { type: 'image/jpeg' });
    
    // First run will download the ONNX model (~40MB) to cache
    const imageBlob = await removeBackground(blob);
    const buffer = Buffer.from(await imageBlob.arrayBuffer());
    const base64Ai = buffer.toString('base64');
    console.log("AI background removal complete.");

    // Now use Playwright to remove the medal via Connected Components and crop
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    const finalDataUri = await page.evaluate(async (base64) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const W = img.width;
          const H = img.height;
          const canvas = document.createElement('canvas');
          canvas.width = W;
          canvas.height = H;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const imgData = ctx.getImageData(0, 0, W, H);
          const data = imgData.data;

          // Connected components on alpha > 50
          let fgLabels = new Int32Array(W * H);
          let currentLabel = 1;
          let componentAreas = {};

          for (let i = 0; i < W * H; i++) {
            if (data[i*4 + 3] > 50 && fgLabels[i] === 0) {
              let area = 0;
              let stack = [i];
              fgLabels[i] = currentLabel;

              while(stack.length > 0) {
                let curr = stack.pop();
                area++;
                let cx = curr % W;
                let cy = Math.floor(curr / W);

                if (cx > 0 && data[(curr-1)*4 + 3] > 50 && fgLabels[curr-1] === 0) { fgLabels[curr-1] = currentLabel; stack.push(curr-1); }
                if (cx < W-1 && data[(curr+1)*4 + 3] > 50 && fgLabels[curr+1] === 0) { fgLabels[curr+1] = currentLabel; stack.push(curr+1); }
                if (cy > 0 && data[(curr-W)*4 + 3] > 50 && fgLabels[curr-W] === 0) { fgLabels[curr-W] = currentLabel; stack.push(curr-W); }
                if (cy < H-1 && data[(curr+W)*4 + 3] > 50 && fgLabels[curr+W] === 0) { fgLabels[curr+W] = currentLabel; stack.push(curr+W); }
              }
              componentAreas[currentLabel] = area;
              currentLabel++;
            }
          }

          let maxArea = 0;
          let mainLabel = 0;
          for (let label in componentAreas) {
            if (componentAreas[label] > maxArea) {
              maxArea = componentAreas[label];
              mainLabel = parseInt(label);
            }
          }

          // Erase everything not the main object (medal) and calculate exact bounding box
          let minX = W, maxX = 0, minY = H, maxY = 0;
          for (let i = 0; i < W * H; i++) {
            if (fgLabels[i] !== mainLabel) {
              data[i*4 + 3] = 0; // make transparent
              data[i*4 + 0] = 0;
              data[i*4 + 1] = 0;
              data[i*4 + 2] = 0;
            } else {
              let x = i % W;
              let y = Math.floor(i / W);
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
          ctx.putImageData(imgData, 0, 0);

          // Crop exactly to bounding box (0px padding)
          let cropW = maxX - minX + 1;
          let cropH = maxY - minY + 1;
          let finalCanvas = document.createElement('canvas');
          finalCanvas.width = cropW;
          finalCanvas.height = cropH;
          let finalCtx = finalCanvas.getContext('2d');
          
          finalCtx.putImageData(ctx.getImageData(minX, minY, cropW, cropH), 0, 0);
          resolve(finalCanvas.toDataURL('image/png'));
        };
        img.src = 'data:image/png;base64,' + base64;
      });
    }, base64Ai);
    
    const base64Data = finalDataUri.replace(/^data:image\/png;base64,/, "");
    fs.writeFileSync('/home/clawuser/.openclaw/workspace/magio-vidpariuvach/public/magio-vidpariuvach-hero.png', base64Data, 'base64');
    console.log("Processed perfectly saved!");
    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();
