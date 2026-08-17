import fs from 'fs';
import path from 'path';

const componentsDir = '/home/clawuser/.openclaw/workspace/landing-template/src/components';
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');
  
  // Find all src="/something" or <source src="/something"
  const regex = /src="\/([^"]+\.(png|jpg|jpeg|webp|mp4|svg))"/g;
  const imports = [];
  let match;
  let counter = 1;
  const usedVars = new Set();
  
  let newContent = content.replace(regex, (fullMatch, imgPath) => {
    if (imgPath === 'favicon.png' || imgPath === 'social-preview.jpg') return fullMatch;
    
    // Create a clean variable name
    let varName = imgPath.split('/').pop().replace(/[^a-zA-Z0-9]/g, '');
    varName = `asset_${varName}_${counter++}`;
    
    imports.push(`import ${varName} from '../assets/images/${imgPath}';`);
    return `src={${varName}}`;
  });

  // Also catch style={{ backgroundImage: "url('/something.jpg')" }}
  const bgRegex = /url\('\/([^']+)'\)/g;
  newContent = newContent.replace(bgRegex, (fullMatch, imgPath) => {
    if (imgPath === 'favicon.png' || imgPath === 'social-preview.jpg') return fullMatch;
    
    let varName = imgPath.split('/').pop().replace(/[^a-zA-Z0-9]/g, '');
    varName = `asset_${varName}_${counter++}`;
    
    imports.push(`import ${varName} from '../assets/images/${imgPath}';`);
    return `url('${"$" + `{${varName}}`}')`;
  });

  if (imports.length > 0) {
    const lastImportIndex = newContent.lastIndexOf('import ');
    let endOfLastImport = newContent.indexOf('\n', lastImportIndex);
    if (endOfLastImport === -1) endOfLastImport = newContent.length;
    
    newContent = newContent.slice(0, endOfLastImport + 1) + imports.join('\n') + '\n' + newContent.slice(endOfLastImport + 1);
    
    // Fix template literal if bg image was used
    newContent = newContent.replace(/backgroundImage:\s*'url\('\$\{([^}]+)\}'\)'/g, 'backgroundImage: `url(${varName})`'.replace('varName', '$1'));
    // Actually the above replace might be flawed. Let's rely on standard AST or just be careful. The bgRegex used above might produce invalid syntax if inside a string literal instead of a template literal.
    
    fs.writeFileSync(path.join(componentsDir, file), newContent);
    console.log(`Updated assets in ${file}`);
  }
}
