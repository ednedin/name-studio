import fs from 'fs';
import path from 'path';

// Check config.ts
const configPath = path.join(process.cwd(), 'src', 'config.ts');
if (fs.existsSync(configPath)) {
  const config = fs.readFileSync(configPath, 'utf-8');
  if (!config.includes('layout: [')) {
    console.error('❌ BUILD VALIDATION FAILED: "layout" array missing in src/config.ts');
    process.exit(1);
  }
} else {
  console.error('❌ BUILD VALIDATION FAILED: src/config.ts does not exist.');
  process.exit(1);
}

// Check environment variables (which should be set by Cloudflare Pages during build)
// In Vite, these are usually loaded into process.env before the build step, 
// or we can check the .env file directly if it exists.
// Since Cloudflare injects them directly into the build environment, 
// we will check the actual runtime environment variables starting with VITE_

const botToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
const chatIds = process.env.VITE_TELEGRAM_CHAT_IDS;

if (!botToken || botToken === '' || botToken === 'YOUR_TOKEN_HERE') {
  console.warn('⚠️ BUILD WARNING: VITE_TELEGRAM_BOT_TOKEN is missing or set to default. Orders will fail to send.');
  // We throw a warning instead of a hard error because someone might want to deploy a preview 
  // without wiring up Telegram yet. If you prefer a hard fail, change this to process.exit(1).
}

if (!chatIds || chatIds === '' || chatIds === 'CHAT_ID_1,CHAT_ID_2') {
  console.warn('⚠️ BUILD WARNING: VITE_TELEGRAM_CHAT_IDS is missing or set to default. Orders will fail to send.');
}

console.log('✅ Build validation passed.');
