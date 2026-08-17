import fs from 'fs';
import path from 'path';

const componentsDir = '/home/clawuser/.openclaw/workspace/landing-template/src/components';
const files = ['FinalCTA.tsx', 'InlineFormBlock.tsx', 'PopupForm.tsx'];

for (const file of files) {
  let content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
  
  // Add import if not exists
  if (!content.includes('siteConfig')) {
    const lastImportIndex = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, endOfLastImport + 1) + "import { siteConfig } from '../config';\n" + content.slice(endOfLastImport + 1);
  }

  // Replace botToken and chatIds
  content = content.replace(/const botToken = '[^']+';/g, 'const botToken = siteConfig.global.telegram.botToken;');
  content = content.replace(/const chatIds = \[[^\]]+\];/g, 'const chatIds = siteConfig.global.telegram.chatIds;');

  // Replace hardcoded prices
  content = content.replace(/1 695/g, '{siteConfig.global.priceCurrent}');
  content = content.replace(/2 450/g, '{siteConfig.global.priceOld}');
  // Note: doing simple string replace for prices might mess up if they are inside strings. 
  // For React components, they are usually in JSX text like <div>1 695 <span>грн</span></div>.

  fs.writeFileSync(path.join(componentsDir, file), content);
  console.log(`Updated telegram & prices in ${file}`);
}
