import fs from 'fs';
let html = fs.readFileSync('index.html', 'utf8');
const bust = `?v=${Date.now()}`;
html = html.replace(/src="\/name-studio\/([^"]*)"/g, `src="/name-studio/$1${bust}"`);
html = html.replace(/href="\/name-studio\/([^"]*)"/g, `href="/name-studio/$1${bust}"`);
fs.writeFileSync('index.html', html);
