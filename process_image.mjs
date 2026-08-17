import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const imgBase64 = fs.readFileSync('/home/clawuser/.openclaw/media/inbound/61aab3bd-d8b6-4fe9-8d5e-7e3249bee2ba.jpg', 'base64');
  
  const resultDataUri = await page.evaluate(async (base64) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        
        // 1. Make white background transparent
        // White is high RGB. Let's make everything > 240,240,240 transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];
          // Simple flood fill or threshold? The user said "transparent bg". 
          // Let's use a threshold for the white/grey background.
          // Since there's a shadow, maybe we keep shadow or remove it?
          // "transparent bg without medal with no extra bg space around the product"
          if (r > 235 && g > 235 && b > 235) {
            data[i+3] = 0; // Transparent
          }
        }
        
        ctx.putImageData(imgData, 0, 0);
        
        // 2. Crop out the medal and transparent space
        // Medal is on the left. The steamer is black.
        // We find the bounding box of non-transparent pixels.
        // Actually, the medal is gold (yellow). We can erase it.
        // Or better, just find the bounding box of the black/dark pixels!
        let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
        
        // Let's just find the bounding box of the steamer
        for (let y = 0; y < canvas.height; y++) {
          for (let x = 0; x < canvas.width; x++) {
            const idx = (y * canvas.width + x) * 4;
            const r = data[idx];
            const g = data[idx+1];
            const b = data[idx+2];
            const a = data[idx+3];
            
            if (a > 0) {
                // If it's the gold medal, it's mostly yellow (R high, G high, B lower)
                // Let's ignore the left side (x < width/2) if it's the medal.
                // The steamer is on the right side.
                // Let's say the steamer is strictly on the right half? 
                // Let's check if it's dark (steamer is black/dark gold).
                if (x > canvas.width * 0.4) {
                   minX = Math.min(minX, x);
                   minY = Math.min(minY, y);
                   maxX = Math.max(maxX, x);
                   maxY = Math.max(maxY, y);
                }
            }
          }
        }
        
        // Create cropped canvas
        const cropW = maxX - minX + 1;
        const cropH = maxY - minY + 1;
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = cropW;
        cropCanvas.height = cropH;
        const cropCtx = cropCanvas.getContext('2d');
        cropCtx.putImageData(ctx.getImageData(minX, minY, cropW, cropH), 0, 0);
        
        // We also want to erase the medal completely if any of it leaked into x > 40%.
        // The steamer is black and dark grey.
        // Let's just use the bounding box. It should be mostly isolated.
        
        resolve(cropCanvas.toDataURL('image/png'));
      };
      img.src = 'data:image/jpeg;base64,' + base64;
    });
  }, imgBase64);
  
  const base64Data = resultDataUri.replace(/^data:image\/png;base64,/, "");
  fs.writeFileSync('/home/clawuser/.openclaw/workspace/magio-vidpariuvach/public/steamer_transparent.png', base64Data, 'base64');
  console.log("Processed image saved!");
  await browser.close();
})();
