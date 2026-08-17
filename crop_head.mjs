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
        
        // The head is roughly the top 45% of the total steamer height
        const steamerHeight = maxY - minY;
        const headBottom = minY + Math.floor(steamerHeight * 0.45);
        
        const cropW = maxX - minX + 1;
        const cropH = headBottom - minY + 1;
        
        const headCanvas = document.createElement('canvas');
        headCanvas.width = cropW;
        headCanvas.height = cropH;
        const headCtx = headCanvas.getContext('2d');
        headCtx.putImageData(ctx.getImageData(minX, minY, cropW, cropH), 0, 0);
        
        resolve(headCanvas.toDataURL('image/png'));
      };
      img.src = 'data:image/png;base64,' + base64;
    });
  }, imgBase64);
  
  const base64Data = resultDataUri.replace(/^data:image\/png;base64,/, "");
  fs.writeFileSync('/home/clawuser/.openclaw/workspace/magio-vidpariuvach/public/steamer-head.png', base64Data, 'base64');
  console.log("Steamer head cropped and saved!");
  await browser.close();
})();
