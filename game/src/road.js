// Procedural endless road: a real curved centre line, built in chunks, with scenery and obstacles.
import * as THREE from 'three';

export const DS = 4;                 // metres between centre-line samples
export const CHUNK = 64;             // samples per chunk (256 m)
export const ROAD_W = 13.5;          // 3 lanes
export const LANES = [-4.3, 0, 4.3];
export const RAIL_OFF = ROAD_W / 2 + 3.3;

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1), _m = new THREE.Matrix4(), _e = new THREE.Euler();
function placeInstance(im, idx, x, y, z, heading, scale) {
  _p.set(x, y, z); _e.set(0, heading, 0); _q.setFromEuler(_e); _s.set(scale, scale, scale);
  _m.compose(_p, _q, _s); im.setMatrixAt(idx, _m);
}

// Builds instanced trunks + leaf cards for a list of trees [{x,z,scale,rot}] using a tree style T.
export function buildTrees(T, list) {
  const trunks = new THREE.InstancedMesh(T.trunk.geometry, T.trunk.material, list.length);
  const cards = new THREE.InstancedMesh(T.cards.geometry, T.cards.material, list.length * T.cards.n);
  let kc = 0;
  list.forEach((t, k) => {
    const { x, z, scale } = t;
    _p.set(x, 0, z); _e.set(0, t.rot || 0, 0); _q.setFromEuler(_e); _s.set(scale, T.trunk.h * scale, scale); _m.compose(_p, _q, _s); trunks.setMatrixAt(k, _m);
    const C = T.cards;
    for (let j = 0; j < C.n; j++) {
      const u = rand(0, 6.28), v = rand(-1, 1); const rr = Math.sqrt(1 - v * v) * rand(0.35, 1);
      let cy = C.yc + v * C.ry, cr = C.rx;
      if (C.cone) { const tt = (j + 0.5) / C.n; cy = C.yc - C.ry + tt * C.ry * 2; cr = C.rx * (1.15 - tt); }
      _p.set(x + Math.cos(u) * rr * cr * scale, cy * scale, z + Math.sin(u) * rr * cr * scale);
      if (C.flat) _e.set(Math.PI / 2 - rand(0.15, 0.45), rand(0, 6.28), 0, 'YXZ'); else _e.set(rand(-C.tilt, C.tilt), rand(0, 6.28), rand(-0.3, 0.3), 'YXZ');
      _q.setFromEuler(_e); const cs = scale * rand(0.8, 1.15); _s.set(cs, cs, cs); _m.compose(_p, _q, _s); cards.setMatrixAt(kc++, _m);
    }
  });
  trunks.castShadow = true; cards.castShadow = true; trunks.frustumCulled = false; cards.frustumCulled = false;
  return [trunks, cards];
}

export class ProceduralRoad {
  constructor(scene, style) {
    this.scene = scene; this.style = style;
    this.group = new THREE.Group(); scene.add(this.group);
    this.samples = [];                 // {x,z,h,s,k}
    this.chunks = new Map();           // chunkIndex -> chunk
    this.gen = { x: 0, z: 0, h: 0, s: 0, k: 0, kTarget: 0, left: 0, rampLen: 40 };
    this.piece = null;
    // start with a straight bit so the garage/road ahead is simple
    this.piece = { type: 'straight', left: 200 };
    this.extend(1500);
  }

  // ---------------------------------------------------------------- centre line
  nextPiece() {
    const r = Math.random();
    if (r < 0.35) return { type: 'straight', left: rand(80, 260) };
    const R = rand(140, 480); const ang = rand(12, 65) * Math.PI / 180;
    return { type: 'curve', k: (Math.random() < 0.5 ? -1 : 1) / R, left: R * ang, ramp: 40 };
  }
  extend(targetS) {
    const g = this.gen;
    while (g.s < targetS) {
      if (!this.piece || this.piece.left <= 0) this.piece = this.nextPiece();
      const pc = this.piece;
      const kT = pc.type === 'curve' ? pc.k : 0;
      // ease the curvature so bends start and end smoothly
      g.k += (kT - g.k) * Math.min(1, DS / 35);
      g.h += g.k * DS;
      g.x += -Math.sin(g.h) * DS; g.z += -Math.cos(g.h) * DS; g.s += DS;
      pc.left -= DS;
      this.samples.push({ x: g.x, z: g.z, h: g.h, s: g.s, k: g.k });
    }
  }
  pointAt(s) {
    const f = s / DS; let i = Math.floor(f); const t = f - i;
    if (i < 0) i = 0; if (i >= this.samples.length - 1) i = this.samples.length - 2;
    const a = this.samples[i], b = this.samples[i + 1];
    let dh = b.h - a.h; if (dh > Math.PI) dh -= Math.PI * 2; if (dh < -Math.PI) dh += Math.PI * 2;
    const h = a.h + dh * t;
    return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, h, rx: Math.cos(h), rz: -Math.sin(h), fx: -Math.sin(h), fz: -Math.cos(h) };
  }
  // nearest sample near a hint; returns {i, d (lateral, + = right), s, h, fx, fz}
  nearest(x, z, hint) {
    const n = this.samples.length; let best = -1, bd = Infinity;
    const lo = Math.max(0, hint - 40), hi = Math.min(n - 1, hint + 40);
    for (let i = lo; i <= hi; i++) { const p = this.samples[i]; const d = (p.x - x) ** 2 + (p.z - z) ** 2; if (d < bd) { bd = d; best = i; } }
    const p = this.samples[best];
    const rx = Math.cos(p.h), rz = -Math.sin(p.h), fx = -Math.sin(p.h), fz = -Math.cos(p.h);
    const dx = x - p.x, dz = z - p.z;
    return { i: best, d: dx * rx + dz * rz, along: dx * fx + dz * fz, s: p.s + (dx * fx + dz * fz), h: p.h, fx, fz, rx, rz, k: p.k };
  }

  // ---------------------------------------------------------------- chunks
  ensure(playerIndex) {
    const need0 = Math.max(0, Math.floor((playerIndex - 70) / CHUNK)), need1 = Math.floor((playerIndex + 330) / CHUNK);
    this.extend((need1 + 2) * CHUNK * DS);
    for (const [ci, ch] of this.chunks) if (ci < need0 || ci > need1 + 1) { this.disposeChunk(ch); this.chunks.delete(ci); }
    for (let ci = need0; ci <= need1; ci++) if (!this.chunks.has(ci)) this.chunks.set(ci, this.buildChunk(ci));
  }
  disposeChunk(ch) {
    this.group.remove(ch.group);
    ch.group.traverse((o) => {
      if (o.isInstancedMesh) { o.dispose(); return; }          // frees the instance matrices; geometry is shared
      if (o.isMesh && !o.userData.shared) o.geometry.dispose();
    });
  }
  obstaclesNear(playerIndex) {
    const out = [];
    const c0 = Math.floor((playerIndex - 20) / CHUNK), c1 = Math.floor((playerIndex + 20) / CHUNK);
    for (let ci = c0; ci <= c1; ci++) { const ch = this.chunks.get(ci); if (ch) for (const o of ch.obstacles) out.push(o); }
    return out;
  }

  ribbon(i0, i1, offA, offB, y, vScale, closedUV = false) {
    // strip between lateral offsets offA..offB over samples i0..i1 (inclusive)
    const n = i1 - i0 + 1; const pos = new Float32Array(n * 2 * 3); const uv = new Float32Array(n * 2 * 2); const idx = [];
    for (let k = 0; k < n; k++) {
      const p = this.samples[i0 + k]; const rx = Math.cos(p.h), rz = -Math.sin(p.h);
      pos.set([p.x + rx * offA, y, p.z + rz * offA, p.x + rx * offB, y, p.z + rz * offB], k * 6);
      const v = p.s * vScale;
      uv.set([0, v, 1, v], k * 4);
      if (k < n - 1) { const a = k * 2; if (offB > offA) idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); else idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    return g;
  }
  shortRibbon(s0, s1, offA, offB, y) {
    const n = 2; const pos = new Float32Array(12); const uv = new Float32Array(8);
    [s0, s1].forEach((s, k) => { const p = this.pointAt(s); pos.set([p.x + p.rx * offA, y, p.z + p.rz * offA, p.x + p.rx * offB, y, p.z + p.rz * offB], k * 6); uv.set([0, k, 1, k], k * 4); });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    g.setIndex(offB > offA ? [0, 1, 2, 1, 3, 2] : [0, 2, 1, 1, 2, 3]); g.computeVertexNormals();
    return g;
  }

  buildChunk(ci) {
    const st = this.style; const M = st.mats;
    const i0 = ci * CHUNK, i1 = Math.min(this.samples.length - 1, (ci + 1) * CHUNK);
    const g = new THREE.Group(); const obstacles = [];
    const s0 = this.samples[i0].s, s1 = this.samples[i1].s;

    // road, shoulders, edge lines
    const road = new THREE.Mesh(this.ribbon(i0, i1, -ROAD_W / 2, ROAD_W / 2, 0.05, 1 / 7), M.road); road.receiveShadow = true; g.add(road);
    for (const sx of [-1, 1]) {
      const sh = new THREE.Mesh(this.ribbon(i0, i1, sx * ROAD_W / 2, sx * (ROAD_W / 2 + 3.2), 0.035, 1 / 7), M.shoulder); sh.receiveShadow = true; g.add(sh);
      g.add(new THREE.Mesh(this.ribbon(i0, i1, sx * (ROAD_W / 2 - 0.45), sx * (ROAD_W / 2 - 0.27), 0.07, 1), M.line));
    }
    // lane dashes
    const dashGeos = [];
    for (let s = Math.ceil(s0 / 9) * 9; s < s1; s += 9) for (const x of [-2.15, 2.15]) dashGeos.push(this.shortRibbon(s, s + 3.2, x - 0.08, x + 0.08, 0.07));
    if (dashGeos.length) { const dg = mergeGeos(dashGeos); g.add(new THREE.Mesh(dg, M.line)); }

    // guardrails (instanced per sample, both sides)
    if (st.guardrail) {
      const n = (i1 - i0 + 1) * 2;
      const rails = new THREE.InstancedMesh(M.railGeo, M.rail, n); const posts = new THREE.InstancedMesh(M.postGeo, M.rail, n);
      let k = 0;
      for (let i = i0; i <= i1; i++) for (const sx of [-1, 1]) {
        const p = this.samples[i]; const rx = Math.cos(p.h), rz = -Math.sin(p.h);
        placeInstance(rails, k, p.x + rx * sx * RAIL_OFF, 0.7, p.z + rz * sx * RAIL_OFF, p.h, 1);
        placeInstance(posts, k, p.x + rx * sx * (RAIL_OFF + 0.05), 0.38, p.z + rz * sx * (RAIL_OFF + 0.05), p.h, 1);
        k++;
      }
      rails.frustumCulled = false; posts.frustumCulled = false; g.add(rails, posts);
    }
    // roadside poles (snow)
    if (st.poles) {
      const n = Math.floor((s1 - s0) / 10) * 2; const im = new THREE.InstancedMesh(M.poleGeo, M.pole, n); let k = 0;
      for (let s = s0; s < s1 - 1 && k < n; s += 10) for (const sx of [-1, 1]) { const p = this.pointAt(s); placeInstance(im, k++, p.x + p.rx * sx * (ROAD_W / 2 + 0.9), 0.7, p.z + p.rz * sx * (ROAD_W / 2 + 0.9), p.h, 1); }
      im.count = k; g.add(im);
    }
    // 3D trees (trunk + leaf cards) and grass tufts
    for (const sc of st.scatter) {
      if (sc.tree) {
        const T = sc.tree; const per = sc.perChunk;
        const trunks = new THREE.InstancedMesh(T.trunk.geometry, T.trunk.material, per);
        const cards = new THREE.InstancedMesh(T.cards.geometry, T.cards.material, per * T.cards.n);
        let kc = 0;
        for (let k = 0; k < per; k++) {
          const s = rand(s0, s1); const side = Math.random() < 0.5 ? -1 : 1; const off = side * rand(sc.lat[0], sc.lat[1]);
          const p = this.pointAt(s); const scale = rand(sc.scale[0], sc.scale[1]);
          const x = p.x + p.rx * off, z = p.z + p.rz * off;
          _p.set(x, 0, z); _e.set(0, rand(0, 6.28), 0); _q.setFromEuler(_e); _s.set(scale, T.trunk.h * scale, scale); _m.compose(_p, _q, _s); trunks.setMatrixAt(k, _m);
          const C = T.cards;
          for (let j = 0; j < C.n; j++) {
            const u = rand(0, 6.28), v = rand(-1, 1); const rr = Math.sqrt(1 - v * v) * rand(0.35, 1);
            let cy = C.yc + v * C.ry, cr = C.rx;
            if (C.cone) { const t = (j + 0.5) / C.n; cy = C.yc - C.ry + t * C.ry * 2; cr = C.rx * (1.15 - t); }
            const cx = x + Math.cos(u) * rr * cr * scale, cz = z + Math.sin(u) * rr * cr * scale;
            _p.set(cx, cy * scale, cz);
            if (C.flat) _e.set(Math.PI / 2 - rand(0.15, 0.45), rand(0, 6.28), 0, 'YXZ'); else _e.set(rand(-C.tilt, C.tilt), rand(0, 6.28), rand(-0.3, 0.3), 'YXZ');
            _q.setFromEuler(_e); const cs = scale * rand(0.8, 1.15); _s.set(cs, cs, cs); _m.compose(_p, _q, _s); cards.setMatrixAt(kc++, _m);
          }
          if (Math.abs(off) < 45) obstacles.push({ type: 'circle', x, z, r: T.obstacle * scale });
        }
        trunks.castShadow = true; cards.castShadow = true; trunks.frustumCulled = false; cards.frustumCulled = false; g.add(trunks, cards);
        continue;
      }
      if (sc.grass) {
        const per = sc.perChunk; const im = new THREE.InstancedMesh(sc.grass.geometry, sc.grass.material, per);
        for (let k = 0; k < per; k++) {
          const s = rand(s0, s1); const side = Math.random() < 0.5 ? -1 : 1; const off = side * rand(sc.lat[0], sc.lat[1]);
          const p = this.pointAt(s); const scale = rand(sc.scale[0], sc.scale[1]);
          placeInstance(im, k, p.x + p.rx * off, 0, p.z + p.rz * off, rand(0, 6.28), scale);
        }
        im.frustumCulled = false; g.add(im);
        continue;
      }
      const per = sc.perChunk; const ims = sc.parts.map((pt) => new THREE.InstancedMesh(pt.geometry, pt.material, per));
      for (let k = 0; k < per; k++) {
        const s = rand(s0, s1); const side = Math.random() < 0.5 ? -1 : 1; const off = side * rand(sc.lat[0], sc.lat[1]);
        const p = this.pointAt(s); const scale = rand(sc.scale[0], sc.scale[1]); const rot = sc.billboard ? (Math.random() < 0.5 ? 0 : 0.5) + p.h : rand(0, 6.28);
        const x = p.x + p.rx * off, z = p.z + p.rz * off;
        ims.forEach((im, j) => { const pt = sc.parts[j]; placeInstance(im, k, x, (pt.y || 0) * scale, z, rot + (pt.rotY || 0), scale * (pt.scale || 1)); });
        if (sc.obstacle && Math.abs(off) < 45) obstacles.push({ type: 'circle', x, z, r: sc.obstacle * scale });
      }
      ims.forEach((im, j) => { im.frustumCulled = false; im.castShadow = !!sc.parts[j].shadow; g.add(im); });
    }
    // billboard (one per chunk) + gantry every 3rd chunk
    {
      const s = rand(s0 + 20, s1 - 20); const side = ci % 2 === 0 ? -1 : 1; const p = this.pointAt(s);
      const bb = new THREE.Group(); const mat = M.billboards[ci % M.billboards.length];
      const panel = new THREE.Mesh(M.bbPanelGeo, [M.rail, M.rail, M.rail, M.rail, mat, M.rail]); panel.position.set(0, 7.5, 0); panel.userData.shared = true; bb.add(panel);
      for (const dx of [-3.5, 3.5]) { const post = new THREE.Mesh(M.bbPostGeo, M.rail); post.position.set(dx, 2.25, 0); post.userData.shared = true; bb.add(post); }
      bb.position.set(p.x + p.rx * side * 19, 0, p.z + p.rz * side * 19); bb.rotation.y = p.h - side * 0.55; g.add(bb);
      const c = Math.cos(bb.rotation.y), sn = Math.sin(bb.rotation.y);
      for (const dx of [-3.5, 3.5]) obstacles.push({ type: 'circle', x: bb.position.x + dx * c, z: bb.position.z - dx * sn, r: 0.3 });
      if (ci % 3 === 1) {
        const gs = (s0 + s1) / 2; const gp = this.pointAt(gs); const ga = new THREE.Group();
        for (const sx of [-1, 1]) { const post = new THREE.Mesh(M.gantryPostGeo, M.rail); post.position.set(sx * (ROAD_W / 2 + 1.2), 3.75, 0); post.userData.shared = true; ga.add(post); obstacles.push({ type: 'circle', x: gp.x + gp.rx * sx * (ROAD_W / 2 + 1.2), z: gp.z + gp.rz * sx * (ROAD_W / 2 + 1.2), r: 0.4 }); }
        const beam = new THREE.Mesh(M.gantryBeamGeo, M.rail); beam.position.set(0, 7.5, 0); beam.userData.shared = true; ga.add(beam);
        const sign = new THREE.Mesh(M.gantrySignGeo, [M.rail, M.rail, M.rail, M.rail, M.sign, M.rail]); sign.position.set(0, 6, 0.2); sign.userData.shared = true; ga.add(sign);
        ga.position.set(gp.x, 0, gp.z); ga.rotation.y = gp.h; g.add(ga);
      }
    }
    // city: buildings + lamp posts
    if (st.buildings) {
      let s = s0 + rand(0, 10); let n = 0;
      while (s < s1 - 8) {
        for (const side of [-1, 1]) {
          const showroom = (Math.floor(s / 37) + side) % 6 === 0;
          const b = st.makeBuilding(showroom); const p = this.pointAt(s + b.d / 2);
          const off = side * (ROAD_W / 2 + 4.5 + b.w / 2 + b.gap);
          b.group.position.set(p.x + p.rx * off, 0, p.z + p.rz * off); b.group.rotation.y = p.h + (showroom ? (side === -1 ? -Math.PI / 2 : Math.PI / 2) : 0);
          g.add(b.group);
          const hw = showroom ? b.d / 2 : b.w / 2, hl = showroom ? b.w / 2 : b.d / 2;
          obstacles.push({ type: 'box', x: b.group.position.x, z: b.group.position.z, hw, hl, h: b.group.rotation.y });
          n++;
        }
        s += rand(14, 24);
      }
      const nl = Math.floor((s1 - s0) / 26) * 2; const lamps = new THREE.InstancedMesh(M.lampGeo, M.lamp, nl); const glows = new THREE.InstancedMesh(M.lampGlowGeo, M.lampGlow, nl); let k = 0;
      for (let ls = s0 + 5; ls < s1 - 5 && k < nl; ls += 26) for (const sx of [-1, 1]) {
        const p = this.pointAt(ls); const x = p.x + p.rx * sx * (ROAD_W / 2 + 1.0), z = p.z + p.rz * sx * (ROAD_W / 2 + 1.0);
        placeInstance(lamps, k, x, 0, z, p.h + (sx === 1 ? Math.PI : 0), 1); placeInstance(glows, k, x, 0, z, p.h + (sx === 1 ? Math.PI : 0), 1); k++;
        obstacles.push({ type: 'circle', x, z, r: 0.2 });
      }
      lamps.count = k; glows.count = k; g.add(lamps, glows);
    }
    this.group.add(g);
    return { ci, i0, i1, group: g, obstacles };
  }

  dispose() { for (const ch of this.chunks.values()) this.disposeChunk(ch); this.chunks.clear(); this.scene.remove(this.group); }
}

function mergeGeos(geos) {
  let nv = 0, ni = 0; for (const g of geos) { nv += g.attributes.position.count; ni += g.index.count; }
  const pos = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), nrm = new Float32Array(nv * 3), idx = new Uint32Array(ni);
  let vo = 0, io = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, vo * 3); uv.set(g.attributes.uv.array, vo * 2); nrm.set(g.attributes.normal.array, vo * 3);
    const ia = g.index.array; for (let i = 0; i < ia.length; i++) idx[io + i] = ia[i] + vo;
    vo += g.attributes.position.count; io += ia.length; g.dispose();
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.BufferAttribute(pos, 3)); m.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); m.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  m.setIndex(new THREE.BufferAttribute(idx, 1));
  return m;
}
