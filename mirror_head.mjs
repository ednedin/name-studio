import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const imgBase64 = fs.readFileSync('/home/clawuser/.openclaw/workspace/magio-vidpariuvach/public/magio-vidpariuvach-hero.png', 'base64');
  
  const resultDataUri = await page.evaluate(async (base64) => {
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
        
        // Find the bounding box of the whole steamer
        let minX = W, maxX = 0, minY = H, maxY = 0;
        for (let y = 0; y < H; y++) {
          for (let x = 0; x < W; x++) {
            const idx = (y * W + x) * 4;
            if (data[idx+3] > 0) {
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        
        // The head should be cropped tighter to avoid the handle.
        // Let's try the top 33% instead of 45%.
        const steamerHeight = maxY - minY;
        const headBottom = minY + Math.floor(steamerHeight * 0.33);
        
        // Let's also crop empty space specifically for the head's bounding box
        let headMinX = W, headMaxX = 0;
        for (let y = minY; y <= headBottom; y++) {
            for (let x = minX; x <= maxX; x++) {
                const idx = (y * W + x) * 4;
                if (data[idx+3] > 0) {
                    if (x < headMinX) headMinX = x;
                    if (x > headMaxX) headMaxX = x;
                }
            }
        }

        const cropW = headMaxX - headMinX + 1;
        const cropH = headBottom - minY + 1;
        
        const headCanvas = document.createElement('canvas');
        headCanvas.width = cropW;
        headCanvas.height = cropH;
        const headCtx = headCanvas.getContext('2d');
        
        // Flip horizontally
        headCtx.translate(cropW, 0);
        headCtx.scale(-1, 1);
        
        // Draw only the cropped area
        headCtx.drawImage(canvas, headMinX, minY, cropW, cropH, 0, 0, cropW, cropH);
        
        resolve(headCanvas.toDataURL('image/png'));
      };
      img.src = 'data:image/png;base64,' + base64;
    });
  }, imgBase64);
  
  const base64Data = resultDataUri.replace(/^data:image\/png;base64,/, "");
  fs.writeFileSync('/home/clawuser/.openclaw/workspace/magio-vidpariuvach/public/steamer-head.png', base64Data, 'base64');
  console.log("Mirrored steamer head cropped and saved!");
  await browser.close();
})();
