// Headless check: load the game, capture console errors, screenshot menu + driving for a few setups.
import { chromium } from 'playwright';
import http from 'http'; import fs from 'fs'; import path from 'path';

const root = path.resolve('www');
const types = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.glb': 'model/gltf-binary', '.wasm': 'application/wasm', '.webp': 'image/webp', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const f = path.join(root, decodeURIComponent(req.url === '/' ? 'index.html' : req.url.split('?')[0]));
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(8765);

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--headless=new', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 960, height: 480 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + m.text().slice(0, 300)); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
fs.mkdirSync('shots', { recursive: true });

const configs = (process.argv[2] || '0,country,day').split(';').map((c) => c.split(','));
for (const [car, world, time, cam] of configs) {
  await page.goto('http://localhost:8765/');
  await page.evaluate(({ car, world, time, cam }) => {
    localStorage.setItem('kidcars-v3', JSON.stringify({ car: +car, world, time, traffic: true, sound: false, tilt: false, cam: +(cam || 0) }));
  }, { car, world, time, cam });
  await page.reload();
  await page.waitForFunction(() => window.__kidcars && window.__kidcars.state() === 'menu' && document.getElementById('loading').classList.contains('hidden'), null, { timeout: 180000 });
  await page.waitForTimeout(1500);
  const tag = `${car}-${world}-${time}${cam ? '-cam' + cam : ''}`;
  await page.screenshot({ path: `shots/menu-${tag}.png` });
  await page.dispatchEvent('#btnPlay', 'pointerdown');
  await page.keyboard.down('ArrowUp');
  await page.waitForTimeout(6000);
  await page.screenshot({ path: `shots/drive-${tag}.png` });
  await page.keyboard.down('ArrowRight'); await page.waitForTimeout(1000); await page.keyboard.up('ArrowRight');
  await page.keyboard.down('Space'); await page.waitForTimeout(2500);
  await page.screenshot({ path: `shots/drive2-${tag}.png` });
  await page.keyboard.up('Space'); await page.keyboard.up('ArrowUp');
  const g = await page.evaluate(() => ({ speed: Math.round(Math.abs(window.__kidcars.body().vf) * 3.6), dist: Math.round(window.__kidcars.G.dist), state: window.__kidcars.state() }));
  console.log('STATE', tag, JSON.stringify(g));
}
console.log('ERRORS', errors.length ? '\n' + errors.join('\n') : 'none');
await browser.close(); server.close();
