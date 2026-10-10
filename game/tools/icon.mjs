import { chromium } from 'playwright'; import http from 'http'; import fs from 'fs'; import path from 'path';
const server = http.createServer((req, res) => { const f = path.join(process.cwd(), decodeURIComponent(req.url.split('?')[0])); const ff = fs.existsSync(f) ? f : path.join(process.cwd(), 'www', decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(ff) || fs.statSync(ff).isDirectory()) { res.writeHead(404); res.end(); return; } const t = { '.js': 'text/javascript', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm' }; res.writeHead(200, { 'content-type': t[path.extname(ff)] || 'application/octet-stream' }); fs.createReadStream(ff).pipe(res); }).listen(8768);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 900, height: 900 } });
page.on('console', (m) => console.log('console:', m.text().slice(0, 200)));
await page.goto('http://localhost:8768/tools/icon.html'); await page.waitForFunction(() => window.__done, null, { timeout: 120000 }); await page.waitForTimeout(300);
await page.screenshot({ path: 'shots/icon-car.png', omitBackground: true });
await browser.close(); server.close(); console.log('ok');
