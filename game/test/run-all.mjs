// Runs the three parts of the touch test loop in parallel (each in its own headless browser) and prints a combined result.
// A part that stalls (headless Chrome occasionally freezes when three browsers share the CPU) is killed and re-run on its own.
import { spawn } from 'child_process';
const parts = ['wheel', 'goals', 'lenasia'];
const LIMIT = 9 * 60 * 1000;
function runPart(part) {
  return new Promise((res) => {
    const p = spawn(process.execPath, ['test/controls.mjs'], { env: { ...process.env, PART: part } });
    let out = ''; let done = false;
    p.stdout.on('data', (d) => { out += d; }); p.stderr.on('data', (d) => { out += d; });
    const timer = setTimeout(() => { if (!done) { out += '\nERROR: part timed out\n'; p.kill('SIGKILL'); } }, LIMIT);
    p.on('close', (code) => { done = true; clearTimeout(timer); res({ part, code, out, timedOut: /part timed out/.test(out) }); });
  });
}
let results = await Promise.all(parts.map(runPart));
for (let i = 0; i < results.length; i++) if (results[i].timedOut) { console.log(`\n(${results[i].part} stalled — running it again on its own)`); results[i] = await runPart(results[i].part); }
let total = 0, failed = 0;
for (const r of results) {
  console.log(`\n===== ${r.part} (exit ${r.code}) =====`);
  for (const line of r.out.split('\n')) if (/^(PASS|FAIL)/.test(line)) { console.log(line); total++; if (line.startsWith('FAIL')) failed++; } else if (/ERROR|Error|rror:/.test(line)) console.log(line);
}
console.log(`\n${total - failed}/${total} checks passed`);
process.exit(failed || results.some((r) => r.code) ? 1 : 0);
