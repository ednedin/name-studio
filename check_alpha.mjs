import { loadImage, createCanvas } from 'canvas';

async function run() {
  const img = await loadImage('/home/clawuser/.openclaw/workspace/magio-vidpariuvach/public/award_badge_transparent.png');
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, img.width, img.height).data;
  
  const corners = [
    [0, 0],
    [img.width - 1, 0],
    [0, img.height - 1],
    [img.width - 1, img.height - 1]
  ];
  
  let allTransparent = true;
  for (const [x, y] of corners) {
    const alpha = data[(y * img.width + x) * 4 + 3];
    console.log(`Corner (${x}, ${y}) alpha: ${alpha}`);
    if (alpha !== 0) allTransparent = false;
  }
  
  console.log(`Is background transparent at corners? ${allTransparent}`);
}
run().catch(console.error);
