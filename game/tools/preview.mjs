// Renders preview screenshots of the processed car models: node tools/preview.mjs [id,id,...]
import { chromium } from 'playwright';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve('.');
const server = http.createServer((req, res) => {
  const f = path.join(root, decodeURIComponent(req.url.split('?')[0]));
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  const ext = path.extname(f);
  const types = { '.js': 'text/javascript', '.mjs': 'text/javascript', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm' };
  res.writeHead(200, { 'content-type': types[ext] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(8766);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
page.on('console', (m) => console.log('console:', m.type(), m.text().slice(0,300))); page.on('pageerror', (e) => console.log('pageerror', e.message)); page.on('requestfailed', (r) => console.log('reqfail', r.url()));
const ids = (process.argv[2] || 'ferrari458,aventador,urus,porsche911,valhalla,peugeot3008,tesla3').split(',');
const views = (process.argv[3] || 'fl,side,rear').split(',');
fs.mkdirSync('shots/cars', { recursive: true });
for (const id of ids) for (const view of views) {
  await page.goto(`http://localhost:8766/tools/preview.html?file=/models/out/${id}.glb&view=${view}&tint=${view === 'side' ? 1 : 0}`);
  await page.waitForFunction(() => window.__done, null, { timeout: 60000 });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `shots/cars/${id}-${view}.png` });
}
await browser.close(); server.close();
console.log('ok');
