const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
// All sound is synthesised (no music): engine with gears, wind, tyre squeal, gravel, horn, bumps, chimes.
export const Sound = {
  ctx: null, on: true, engine: null, wind: null, gear: 0, shiftT: 0, rpm: 0.2, rain: false,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const ctx = this.ctx = new AC();
    const master = this.master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    // ---- engine: two detuned saws + a sub square, through a resonant lowpass, plus an exhaust band
    const eg = ctx.createGain(); eg.gain.value = 0.0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500; lp.Q.value = 2.5;
    const o1 = ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 60;
    const o3 = ctx.createOscillator(); o3.type = 'sawtooth'; o3.frequency.value = 61; const o3g = ctx.createGain(); o3g.gain.value = 0.5;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 30; const o2g = ctx.createGain(); o2g.gain.value = 0.3;
    const ex = ctx.createBiquadFilter(); ex.type = 'bandpass'; ex.frequency.value = 180; ex.Q.value = 1.2; const exg = ctx.createGain(); exg.gain.value = 0.5;
    o1.connect(lp); o3.connect(o3g); o3g.connect(lp); o2.connect(o2g); o2g.connect(lp); lp.connect(eg);
    o1.connect(ex); ex.connect(exg); exg.connect(eg); eg.connect(master);
    o1.start(); o2.start(); o3.start();
    this.engine = { o1, o2, o3, lp, eg, ex };
    // ---- noise sources: wind, tyre squeal, gravel
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const noise = (filterType, freq, q) => { const s = ctx.createBufferSource(); s.buffer = buf; s.loop = true; const f = ctx.createBiquadFilter(); f.type = filterType; f.frequency.value = freq; if (q) f.Q.value = q; const g = ctx.createGain(); g.gain.value = 0; s.connect(f); f.connect(g); g.connect(master); s.start(); return { g, f }; };
    this.wind = { ...noise('lowpass', 600), buf };
    this.squeal = noise('bandpass', 1900, 6);
    this.gravel = noise('lowpass', 900);
    this.rainN = noise('highpass', 2600);
    this.setOn(this.on);
  },
  setOn(v) { this.on = v; if (this.master) this.master.gain.value = v ? 0.8 : 0; },
  resume() { if (this.ctx && this.ctx.state === 'suspended' && !this.paused) this.ctx.resume(); },
  // silence everything (pause menu, app in the background): the whole audio graph sleeps
  pause() { this.paused = true; if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); },
  unpause() { this.paused = false; this.resume(); },
  // engine and road noise off (garage); clicks and fanfares still play
  quiet() { if (!this.engine) return; this.engine.eg.gain.value = 0; this.wind.g.gain.value = 0; this.squeal.g.gain.value = 0; this.gravel.g.gain.value = 0; this.rpm = 0; },
  // speed m/s, gas bool, slide = lateral slip m/s, offRoad bool, dt seconds
  update(speed, maxSpeed, gas, boosting, slide = 0, offRoad = false, dt = 0.016) {
    if (!this.engine) return;
    const gears = 6, span = maxSpeed / gears;
    const gear = Math.min(gears - 1, Math.floor(speed / span));
    if (gear !== this.gear) { this.shiftT = 0.14; this.gear = gear; }      // gear change: a short dip in power
    this.shiftT = Math.max(0, this.shiftT - dt);
    const frac = clamp((speed - gear * span) / span, 0, 1);
    // revs: idle at rest, climb through each gear; blip up when the gas is pressed at low speed
    const target = speed < 0.5 ? (gas ? 0.45 : 0.15) : 0.25 + frac * 0.7 + (gas ? 0.05 : 0);
    this.rpm += (target - this.rpm) * Math.min(1, (gas ? 6 : 3) * dt);
    const shifting = this.shiftT > 0;
    const rpm = shifting ? this.rpm * 0.75 : this.rpm;
    const f = 42 + rpm * 125 + gear * 8 + (boosting ? 35 : 0);
    const sm = (param, t, k) => { param.value += (t - param.value) * k; };
    sm(this.engine.o1.frequency, f, 0.3); sm(this.engine.o3.frequency, f * 1.012, 0.3);
    sm(this.engine.o2.frequency, f / 2, 0.3);
    sm(this.engine.ex.frequency, 120 + rpm * 500, 0.2);
    sm(this.engine.lp.frequency, 260 + rpm * 1500 + (gas ? 350 : 0), 0.15);
    sm(this.engine.eg.gain, (gas ? 0.17 : 0.07 + rpm * 0.04) * (shifting ? 0.55 : 1), 0.15);
    const w = Math.pow(clamp(speed / 60, 0, 1), 2);
    sm(this.wind.g.gain, w * 0.12, 0.08);
    const sq = offRoad ? 0 : clamp((Math.abs(slide) - 2.2) / 5, 0, 1) * clamp(speed / 12, 0, 1);
    sm(this.squeal.g.gain, sq * 0.16, 0.2); sm(this.squeal.f.frequency, 1700 + sq * 500, 0.1);
    sm(this.gravel.g.gain, offRoad ? clamp(speed / 15, 0, 1) * 0.2 : 0, 0.15);
    sm(this.rainN.g.gain, this.rain ? 0.045 : 0, 0.05);
  },
  horn(k = 1) {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    for (const f of [420 * k, 525 * k]) {
      const o = this.ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1200;
      const g = this.ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.03); g.gain.setValueAtTime(0.18, t + 0.45); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
      o.connect(lp); lp.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.65);
    }
  },
  bump(strength) {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    const s = this.ctx.createBufferSource(); s.buffer = this.wind.buf;
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 250 + strength * 400;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.55 * strength, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22 + strength * 0.2);
    s.connect(lp); lp.connect(g); g.connect(this.master); s.start(t); s.stop(t + 0.5);
    // metallic clank on hard hits
    if (strength > 0.4) { const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(900, t); o.frequency.exponentialRampToValueAtTime(220, t + 0.15); const g2 = this.ctx.createGain(); g2.gain.setValueAtTime(0.25 * strength, t); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.2); o.connect(g2); g2.connect(this.master); o.start(t); o.stop(t + 0.22); }
  },
  // short bright blip for picking up a star (pitch climbs with a combo)
  ping(n = 0) {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime; const f = 880 * Math.pow(2, Math.min(12, n) / 12);
    const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * 1.5, t + 0.08);
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.25);
  },
  // three rising notes: mission done / sticker earned (a chime, not music)
  fanfare(big = false) {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime; const notes = big ? [523, 659, 784, 1047] : [659, 784, 1047];
    notes.forEach((f, i) => {
      const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
      const g = this.ctx.createGain(); const t0 = t + i * 0.11; g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.25, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + (i === notes.length - 1 ? 0.6 : 0.25));
      o.connect(g); g.connect(this.master); o.start(t0); o.stop(t0 + 0.7);
    });
  },
  // camera shutter click
  click() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime; const s = this.ctx.createBufferSource(); s.buffer = this.wind.buf;
    const hp = this.ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2500;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.3, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    s.connect(hp); hp.connect(g); g.connect(this.master); s.start(t); s.stop(t + 0.06);
  },
  whoosh() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    const s = this.ctx.createBufferSource(); s.buffer = this.wind.buf;
    const bp = this.ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.setValueAtTime(400, t); bp.frequency.exponentialRampToValueAtTime(3000, t + 0.6); bp.Q.value = 1.5;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.3, t + 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    s.connect(bp); bp.connect(g); g.connect(this.master); s.start(t); s.stop(t + 1);
  },
};
