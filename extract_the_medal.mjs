import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';

async function run() {
  const inputPath = '/home/clawuser/.openclaw/media/inbound/78351003-410e-4de2-84d3-6248c059a978.jpg';
  
  console.log("Removing background...");
  const blob = await removeBackground(inputPath);
  const buffer = Buffer.from(await blob.arrayBuffer());
  
  console.log("Loading into canvas...");
  const img = await loadImage(buffer);
  const w = img.width;
  const h = img.height;
  
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  
  // Find islands using BFS
  const visited = new Uint8Array(w * h);
  const islands = [];
  
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      if (!visited[idx] && data[idx * 4 + 3] > 50) {
        // New island
        const island = { pixels: [], minX: w, maxX: 0, minY: h, maxY: 0 };
        const queue = [idx];
        visited[idx] = 1;
        
        let qHead = 0;
        while (qHead < queue.length) {
          const curr = queue[qHead++];
          const cx = curr % w;
          const cy = Math.floor(curr / w);
          
          island.pixels.push(curr);
          if (cx < island.minX) island.minX = cx;
          if (cx > island.maxX) island.maxX = cx;
          if (cy < island.minY) island.minY = cy;
          if (cy > island.maxY) island.maxY = cy;
          
          // Neighbors
          const neighbors = [
            curr - 1, curr + 1, curr - w, curr + w,
            curr - w - 1, curr - w + 1, curr + w - 1, curr + w + 1
          ];
          for (const n of neighbors) {
            if (n >= 0 && n < w * h && !visited[n]) {
              const nx = n % w;
              // Prevent wrapping
              if (Math.abs(nx - cx) <= 1 && data[n * 4 + 3] > 50) {
                visited[n] = 1;
                queue.push(n);
              }
            }
          }
        }
        islands.push(island);
      }
    }
  }
  
  console.log(`Found ${islands.length} islands.`);
  
  // We want the medal. The medal is on the left. Let's find the island with the lowest minX that has a decent size.
  islands.sort((a, b) => b.pixels.length - a.pixels.length);
  
  // Usually, steamer is largest [0]. Medal is second largest [1].
  let medalIsland = null;
  if (islands.length > 1) {
    medalIsland = islands[1]; // second largest
    console.log(`Steamer island size: ${islands[0].pixels.length}, Medal island size: ${islands[1].pixels.length}`);
  } else {
    // Fallback if connected
    console.log("Only 1 island found. The medal is connected to the steamer!");
    return;
  }
  
  // Erase everything that isn't the medal island
  const medalSet = new Set(medalIsland.pixels);
  for (let i = 0; i < w * h; i++) {
    if (!medalSet.has(i)) {
      data[i * 4 + 3] = 0; // Transparent
    }
  }
  
  ctx.putImageData(imgData, 0, 0);
  
  // Crop to medal
  const trimW = medalIsland.maxX - medalIsland.minX + 1;
  const trimH = medalIsland.maxY - medalIsland.minY + 1;
  
  const trimCanvas = createCanvas(trimW, trimH);
  const trimCtx = trimCanvas.getContext('2d');
  trimCtx.drawImage(canvas, medalIsland.minX, medalIsland.minY, trimW, trimH, 0, 0, trimW, trimH);
  
  const outPath = '/home/clawuser/.openclaw/workspace/magio-vidpariuvach/public/award_badge_transparent.png';
  fs.writeFileSync(outPath, trimCanvas.toBuffer('image/png'));
  console.log(`Saved extracted medal to ${outPath}`);
}

run().catch(console.error);
