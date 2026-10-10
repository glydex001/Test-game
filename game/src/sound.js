const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const Sound = {
  ctx: null, on: true, engine: null, wind: null,
  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    const ctx = this.ctx = new AC();
    const master = this.master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    // engine
    const eg = ctx.createGain(); eg.gain.value = 0.0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
    const o1 = ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 60;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 30;
    const o2g = ctx.createGain(); o2g.gain.value = 0.35;
    o1.connect(lp); o2.connect(o2g); o2g.connect(lp); lp.connect(eg); eg.connect(master);
    o1.start(); o2.start();
    this.engine = { o1, o2, lp, eg };
    // wind noise
    const buf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = buf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const ns = ctx.createBufferSource(); ns.buffer = buf; ns.loop = true;
    const nlp = ctx.createBiquadFilter(); nlp.type = 'lowpass'; nlp.frequency.value = 600;
    const ng = ctx.createGain(); ng.gain.value = 0;
    ns.connect(nlp); nlp.connect(ng); ng.connect(master); ns.start();
    this.wind = { ng, nlp, buf };
    this.setOn(this.on);
  },
  setOn(v) { this.on = v; if (this.master) this.master.gain.value = v ? 0.8 : 0; },
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); },
  update(speed, maxSpeed, gas, boosting) {
    if (!this.engine) return;
    const t = this.ctx.currentTime;
    const gears = 5, span = maxSpeed / gears;
    const gear = Math.min(gears - 1, Math.floor(speed / span));
    const frac = clamp((speed - gear * span) / span, 0, 1);
    const rpm = 0.15 + frac * 0.85;
    const f = 45 + rpm * 110 + gear * 10 + (boosting ? 30 : 0);
    const sm = (param, target, k) => { param.value += (target - param.value) * k; };
    sm(this.engine.o1.frequency, f, 0.25);
    sm(this.engine.o2.frequency, f / 2, 0.25);
    sm(this.engine.lp.frequency, 300 + rpm * 1400 + (gas ? 300 : 0), 0.15);
    sm(this.engine.eg.gain, gas ? 0.16 : 0.08 + rpm * 0.02, 0.12);
    const w = Math.pow(clamp(speed / 60, 0, 1), 2);
    sm(this.wind.ng.gain, w * 0.12, 0.08);
  },
  horn() {
    if (!this.ctx || !this.on) return;
    const t = this.ctx.currentTime;
    for (const f of [420, 525]) {
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
    const lp = this.ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 250;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(0.5 * strength, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    s.connect(lp); lp.connect(g); g.connect(this.master); s.start(t); s.stop(t + 0.3);
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

