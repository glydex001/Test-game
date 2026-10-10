// Runs the three parts of the touch test loop in parallel (each in its own headless browser) and prints a combined result.
import { spawn } from 'child_process';
const parts = ['wheel', 'goals', 'lenasia'];
const results = await Promise.all(parts.map((part) => new Promise((res) => {
  const p = spawn(process.execPath, ['test/controls.mjs'], { env: { ...process.env, PART: part } });
  let out = ''; p.stdout.on('data', (d) => { out += d; }); p.stderr.on('data', (d) => { out += d; });
  p.on('close', (code) => res({ part, code, out }));
})));
let total = 0, failed = 0;
for (const r of results) {
  console.log(`\n===== ${r.part} (exit ${r.code}) =====`);
  for (const line of r.out.split('\n')) if (/^(PASS|FAIL)/.test(line)) { console.log(line); total++; if (line.startsWith('FAIL')) failed++; } else if (/ERROR|Error|rror:/.test(line)) console.log(line);
}
console.log(`\n${total - failed}/${total} checks passed`);
process.exit(failed || results.some((r) => r.code) ? 1 : 0);
