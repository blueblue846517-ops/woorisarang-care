const fs = require('node:fs');
const path = require('node:path');

const output = path.join(__dirname, 'dist');
const hostname = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
if (!hostname) {
  console.log('No Vercel domain configured. Keeping local Open Graph image paths.');
  process.exit(0);
}

const imageUrl = new URL('/og-image.jpg', `https://${hostname}`).href;

for (const file of fs.readdirSync(output).filter(name => name.endsWith('.html'))) {
  const filename = path.join(output, file);
  const html = fs.readFileSync(filename, 'utf8');
  const updated = html.replace(/(<meta property="og:image" content=")[^"]+(")/, `$1${imageUrl}$2`);
  fs.writeFileSync(filename, updated);
}
