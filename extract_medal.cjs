const { removeBackground } = require('@imgly/background-removal-node');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function processImage() {
  const inputPath = '/home/clawuser/.openclaw/media/inbound/39e930e6-64b3-42c0-af10-7de03a57532d.jpg';
  
  console.log("Running background removal...");
  const blob = await removeBackground(inputPath);
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  
  console.log("Loading result into Canvas...");
  const img = await loadImage(buffer);
  
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;
  
  // The medal is on the left, steamer on the right.
  // We can just erase everything on the right half (x > 300) to isolate the medal.
  for (let i = 0; i < data.length; i += 4) {
    const x = (i / 4) % canvas.width;
    if (x > canvas.width * 0.6) { // To be safe, erase right 40% completely
      data[i+3] = 0;
    }
  }
  ctx.putImageData(imgData, 0, 0);
  
  // Trim transparent pixels
  let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const alpha = data[(y * canvas.width + x) * 4 + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  const trimmedWidth = maxX - minX + 1;
  const trimmedHeight = maxY - minY + 1;
  
  if (trimmedWidth <= 0 || trimmedHeight <= 0) {
    console.log("No visible pixels found after trimming.");
    return;
  }
  
  const trimmedCanvas = createCanvas(trimmedWidth, trimmedHeight);
  const trimmedCtx = trimmedCanvas.getContext('2d');
  trimmedCtx.drawImage(canvas, minX, minY, trimmedWidth, trimmedHeight, 0, 0, trimmedWidth, trimmedHeight);
  
  // Also save as webp via standard toBuffer or just png
  const outBuffer = trimmedCanvas.toBuffer('image/png');
  fs.writeFileSync('./public/medal_transparent.png', outBuffer);
  console.log("Saved to ./public/medal_transparent.png");
}

processImage().catch(console.error);
