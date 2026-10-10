// Visual effects: rain (streaking particles that follow the camera) and tyre skid marks.
import * as THREE from 'three';

export class Rain {
  constructor(scene, n = 1400) {
    this.n = n; this.box = { w: 60, h: 30, d: 60 };
    const pos = new Float32Array(n * 3 * 2);   // line segments: top + bottom per drop
    this.off = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { this.off[i * 3] = Math.random() * this.box.w - this.box.w / 2; this.off[i * 3 + 1] = Math.random() * this.box.h; this.off[i * 3 + 2] = Math.random() * this.box.d - this.box.d / 2; }
    this.geo = new THREE.BufferGeometry(); this.geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.LineBasicMaterial({ color: 0xcfe0f0, transparent: true, opacity: 0.35, fog: true });
    this.mesh = new THREE.LineSegments(this.geo, mat); this.mesh.frustumCulled = false; this.mesh.visible = false; scene.add(this.mesh);
    this.t = 0;
  }
  set(on) { this.mesh.visible = on; }
  // cx,cz: camera position; vx,vz: car velocity (drops streak backwards when moving)
  update(dt, cx, cz, vx, vz) {
    if (!this.mesh.visible) return;
    this.t += dt; const p = this.geo.attributes.position.array; const { w, h, d } = this.box; const fall = 28;
    const sx = -vx * 0.05, sz = -vz * 0.05;
    for (let i = 0; i < this.n; i++) {
      const ox = this.off[i * 3], oz = this.off[i * 3 + 2]; const y = ((this.off[i * 3 + 1] - this.t * fall) % h + h) % h;
      const x = cx + ox, z = cz + oz;
      p[i * 6] = x; p[i * 6 + 1] = y; p[i * 6 + 2] = z;
      p[i * 6 + 3] = x + sx; p[i * 6 + 4] = y + 1.1; p[i * 6 + 5] = z + sz;
    }
    this.geo.attributes.position.needsUpdate = true;
  }
}

export class SkidMarks {
  constructor(scene, max = 320) {
    this.max = max; this.head = 0;
    const pos = new Float32Array(max * 4 * 3); const alpha = new Float32Array(max * 4); const idx = new Uint16Array(max * 6);
    for (let i = 0; i < max; i++) { const v = i * 4; idx.set([v, v + 1, v + 2, v, v + 2, v + 3], i * 6); }
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); this.geo.setAttribute('aA', new THREE.BufferAttribute(alpha, 1)); this.geo.setIndex(new THREE.BufferAttribute(idx, 1));
    const mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2,
      uniforms: {}, vertexShader: 'attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'varying float vA; void main(){ gl_FragColor = vec4(0.05, 0.05, 0.05, vA * 0.55); }' });
    this.mesh = new THREE.Mesh(this.geo, mat); this.mesh.frustumCulled = false; this.mesh.renderOrder = 1; scene.add(this.mesh);
    this.last = [null, null];   // last point per wheel [x,z]
  }
  clear() { this.geo.attributes.aA.array.fill(0); this.geo.attributes.aA.needsUpdate = true; this.last = [null, null]; }
  // call every frame; sliding: strength 0..1 (0 ends the mark). wheels: [[x,z],[x,z]] rear wheel contact points; rx,rz: car right vector
  update(sliding, wheels, rx, rz, y = 0.1) {
    for (let k = 0; k < 2; k++) {
      const w = wheels[k];
      if (sliding <= 0) { this.last[k] = null; continue; }
      const l = this.last[k];
      if (l && Math.hypot(w[0] - l[0], w[1] - l[1]) < 0.35) continue;
      if (l) {
        const i = this.head; this.head = (this.head + 1) % this.max; const p = this.geo.attributes.position.array, a = this.geo.attributes.aA.array; const hw = 0.13;
        p.set([l[0] - rx * hw, y, l[1] - rz * hw, l[0] + rx * hw, y, l[1] + rz * hw, w[0] + rx * hw, y, w[1] + rz * hw, w[0] - rx * hw, y, w[1] - rz * hw], i * 12);
        a.fill(sliding, i * 4, i * 4 + 4);
        this.geo.attributes.position.needsUpdate = true; this.geo.attributes.aA.needsUpdate = true;
      }
      this.last[k] = [w[0], w[1]];
    }
  }
}
