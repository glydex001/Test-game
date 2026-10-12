// node tools/glbview.mjs <glb path> <out png> [az] [el]
import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';
const [file, out, az = '35', el = '25'] = process.argv.slice(2);
const abs = path.resolve(file);
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]); const f = u === '/model.glb' ? abs : path.join(process.cwd(), u);
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  const t = { '.js': 'text/javascript', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm' };
  res.writeHead(200, { 'content-type': t[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
}).listen(8769);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 640, height: 480 } });
page.on('console', (m) => console.log('console:', m.text().slice(0, 200)));
await page.goto(`http://localhost:8769/tools/glbview.html?file=/model.glb&az=${az}&el=${el}`); await page.waitForFunction(() => window.__done, null, { timeout: 120000 }); await page.waitForTimeout(200);
console.log(JSON.stringify(await page.evaluate(() => window.__info)));
await page.screenshot({ path: out }); await browser.close(); server.close();
