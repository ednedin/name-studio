import { chromium } from 'playwright';
import { exec } from 'child_process';

const server = exec('npm run dev -- --port 5173');

setTimeout(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173');
    await page.waitForTimeout(3000);
    // Take a screenshot of the entire page to see both the calculator and footer
    await page.screenshot({ path: 'visual_logs/footer_ui.webp', fullPage: true });
    await browser.close();
    console.log("SNAPSHOT_SUCCESS");
  } catch(e) {
    console.error("SNAPSHOT_ERROR:", e);
  } finally {
    server.kill();
    process.exit(0);
  }
}, 6000);
