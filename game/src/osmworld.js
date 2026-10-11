// Free-roam map mode built from OpenStreetMap data (roads, buildings, parks, water) — e.g. Lenasia.
import * as THREE from 'three';
import { buildTrees } from './road.js';
import { addStar, removeStars } from './goals.js';

const TILE = 400;
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1), _m = new THREE.Matrix4(), _e = new THREE.Euler();
// deterministic pseudo random from integers
function hash(a, b, c = 0) { let h = (a * 374761393 + b * 668265263 + c * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177; h = h ^ (h >>> 16); return ((h >>> 0) % 100000) / 100000; }
const ROAD_Y = { motorway: 0.09, trunk: 0.09, primary: 0.085, secondary: 0.08, tertiary: 0.075, residential: 0.07, unclassified: 0.07, living_street: 0.065, service: 0.06, track: 0.055 };
const ROAD_SPEED = { motorway: 30, trunk: 26, primary: 20, secondary: 17, tertiary: 15, residential: 11, unclassified: 12, living_street: 7, service: 7, track: 6 };

export class OsmWorld {
  constructor(scene, style, data) {
    this.scene = scene; this.style = style; this.data = data; this.M = style.mats;
    this.group = new THREE.Group(); scene.add(this.group);
    this.nodes = data.nodes; this.roads = data.roads;
    this.suburbs = data.suburbs || []; this.signs = data.signs || []; this.tlHeads = [];
    this.hasRails = false; this.isMap = true;
    this.tiles = new Map(); this.roadMeshes = new Map(); this.areaMeshes = new Map(); this.signCache = new Map(); this.signMats = [];
    this.buildIndex();
    this.makeMaterials();
  }

  // ---------------------------------------------------------------- indexing
  buildIndex() {
    const N = this.nodes; this.cell = 60; this.hash = new Map(); this.nodeRoads = new Map();
    this.roadTiles = new Map(); this.tileRoads = new Map(); this.tileBuildings = new Map(); this.tileAreas = new Map(); this.tileTrees = new Map(); this.tilePois = new Map();
    const key = (cx, cz) => cx * 100003 + cz;
    this.roads.forEach((r, ri) => {
      r.len = 0; r.seg = [];
      for (let i = 0; i < r.n.length - 1; i++) {
        const a = N[r.n[i]], b = N[r.n[i + 1]]; const l = Math.hypot(b[0] - a[0], b[1] - a[1]); r.seg.push(l); r.len += l;
        const x0 = Math.min(a[0], b[0]), x1 = Math.max(a[0], b[0]), z0 = Math.min(a[1], b[1]), z1 = Math.max(a[1], b[1]);
        for (let cx = Math.floor(x0 / this.cell); cx <= Math.floor(x1 / this.cell); cx++) for (let cz = Math.floor(z0 / this.cell); cz <= Math.floor(z1 / this.cell); cz++) {
          const k = key(cx, cz); let l2 = this.hash.get(k); if (!l2) { l2 = []; this.hash.set(k, l2); } l2.push(ri * 4096 + i);
        }
      }
      r.n.forEach((ni, k) => { let l2 = this.nodeRoads.get(ni); if (!l2) { l2 = []; this.nodeRoads.set(ni, l2); } l2.push([ri, k]); });
      // tiles the road touches (by bbox)
      let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
      for (const ni of r.n) { const p = N[ni]; x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); z0 = Math.min(z0, p[1]); z1 = Math.max(z1, p[1]); }
      const ts = [];
      for (let tx = Math.floor(x0 / TILE); tx <= Math.floor(x1 / TILE); tx++) for (let tz = Math.floor(z0 / TILE); tz <= Math.floor(z1 / TILE); tz++) { const tk = key(tx, tz); ts.push(tk); let l2 = this.tileRoads.get(tk); if (!l2) { l2 = []; this.tileRoads.set(tk, l2); } l2.push(ri); }
      this.roadTiles.set(ri, ts);
    });
    const put = (map, x, z, v) => { const tk = key(Math.floor(x / TILE), Math.floor(z / TILE)); let l2 = map.get(tk); if (!l2) { l2 = []; map.set(tk, l2); } l2.push(v); };
    this.data.buildings.forEach((b, bi) => { const c = centroid(b.p); b.c = c; put(this.tileBuildings, c[0], c[1], bi); });
    this.data.areas.forEach((a, ai) => {
      let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
      for (const p of a.p) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); z0 = Math.min(z0, p[1]); z1 = Math.max(z1, p[1]); }
      if ((x1 - x0) * (z1 - z0) > 4e6) return;   // skip huge farmland polygons (ground already covers it)
      for (let tx = Math.floor(x0 / TILE); tx <= Math.floor(x1 / TILE); tx++) for (let tz = Math.floor(z0 / TILE); tz <= Math.floor(z1 / TILE); tz++) { const tk = key(tx, tz); let l2 = this.tileAreas.get(tk); if (!l2) { l2 = []; this.tileAreas.set(tk, l2); } l2.push(ai); }
    });
    this.data.trees.forEach((t) => put(this.tileTrees, t[0], t[1], t));
    for (const row of this.data.treeRows) for (let i = 0; i < row.length - 1; i++) { const a = row[i], b = row[i + 1]; const l = Math.hypot(b[0] - a[0], b[1] - a[1]); for (let d = 0; d < l; d += 9) { const t = d / l; put(this.tileTrees, a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]); } }
    this.data.pois.forEach((p) => put(this.tilePois, p.c[0], p.c[1], p));
    this.tileSigns = new Map(); this.signs.forEach((sg) => put(this.tileSigns, sg[0], sg[1], sg));
    this.key = key;
  }

  // nearest road to a point: returns {d (abs distance to centre line), w, onRoad, h (road heading at that spot), r, i, t, name, type}
  nearest(x, z, opts) {
    const N = this.nodes; let best = null, bd = Infinity; const skipMinor = opts && opts.skipMinor; const exclude = opts && opts.exclude;
    const cx = Math.floor(x / this.cell), cz = Math.floor(z / this.cell);
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
      const l = this.hash.get(this.key(cx + dx, cz + dz)); if (!l) continue;
      for (const code of l) {
        const ri = Math.floor(code / 4096), i = code % 4096; const r = this.roads[ri];
        if (skipMinor && (r.t === 'service' || r.t === 'track')) continue;
        if (exclude === ri) continue;
        const a = N[r.n[i]], b = N[r.n[i + 1]];
        const ex = b[0] - a[0], ez = b[1] - a[1]; const L2 = ex * ex + ez * ez || 1;
        let t = ((x - a[0]) * ex + (z - a[1]) * ez) / L2; t = clamp(t, 0, 1);
        const px = a[0] + ex * t, pz = a[1] + ez * t; const d = Math.hypot(x - px, z - pz);
        const score = d - r.w / 2;   // prefer the road whose surface we're actually on
        if (score < bd) { bd = score; best = { d, w: r.w, r: ri, i, t, ex, ez, px, pz }; }
      }
    }
    if (!best) return { d: 1e9, w: 0, onRoad: false, h: 0, name: '', type: '' };
    const r = this.roads[best.r];
    best.h = Math.atan2(-best.ex, -best.ez); best.onRoad = best.d <= r.w / 2 + 0.9; best.name = r.name; best.type = r.t;
    return best;
  }

  // ---------------------------------------------------------------- materials
  stopMaterial() {
    const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d');
    x.fillStyle = '#c8102e'; x.beginPath(); for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + (i * Math.PI) / 4; x.lineTo(64 + Math.cos(a) * 62, 64 + Math.sin(a) * 62); } x.closePath(); x.fill();
    x.strokeStyle = '#fff'; x.lineWidth = 5; x.stroke(); x.fillStyle = '#fff'; x.font = '900 40px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('STOP', 64, 66);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshStandardMaterial({ map: t, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.5 });
  }
  streetSignMaterial(name) {
    const key = 'st:' + name; if (this.signCache.has(key)) return this.signCache.get(key);
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 96; const x = cv.getContext('2d');
    x.fillStyle = '#1f6b3a'; x.fillRect(0, 0, 512, 96); x.strokeStyle = '#fff'; x.lineWidth = 4; x.strokeRect(6, 6, 500, 84);
    x.fillStyle = '#fff'; x.textAlign = 'center'; x.textBaseline = 'middle'; let size = 44; x.font = `800 ${size}px Arial`;
    while (x.measureText(name.toUpperCase()).width > 470 && size > 20) { size -= 3; x.font = `800 ${size}px Arial`; }
    x.fillText(name.toUpperCase(), 256, 50);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.5, side: THREE.DoubleSide }); this.signCache.set(key, m); return m;
  }
  // which suburb polygon (if any) contains the point
  suburbAt(x, z) { for (const sb of this.suburbs) if (pointInPoly(x, z, sb.p)) return sb.name; return ''; }

  // traffic lights, stop signs, speed humps, pedestrian crossings and street-name signs for one tile
  buildFurniture(tx, tz, tk, g, obstacles) {
    const N = this.nodes; const x0 = tx * TILE, z0 = tz * TILE;
    const poles = [], heads = [], bulbs = [], stops = [], humps = [], stripes = [], boards = [];
    for (const sg of (this.tileSigns.get(tk) || [])) {
      const [sx, sz, kind] = sg; const nr = this.nearest(sx, sz); if (nr.d > 1e8) continue;
      const h = nr.h; const fx = -Math.sin(h), fz = -Math.cos(h); const rx = Math.cos(h), rz = -Math.sin(h); const w = nr.w;
      if (kind === 'tl') {
        // one light head per approach: find the roads at this node and put a pole on the left kerb of each incoming side
        const dirs = [];
        for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) { const l = this.hash.get(this.key(Math.floor(sx / this.cell) + dx, Math.floor(sz / this.cell) + dz)); if (!l) continue; for (const code of l) { const ri = Math.floor(code / 4096), i = code % 4096; const r = this.roads[ri]; if (r.t === 'service' || r.t === 'track') continue; for (const [ni, nj] of [[r.n[i], r.n[i + 1]], [r.n[i + 1], r.n[i]]]) { const a = N[ni], b = N[nj]; if (Math.hypot(a[0] - sx, a[1] - sz) > 1.5) continue; const ex = b[0] - a[0], ez = b[1] - a[1]; const L = Math.hypot(ex, ez) || 1; dirs.push({ ux: ex / L, uz: ez / L, w: r.w }); } } }
        const used = [];
        for (const d of dirs) {
          if (used.some((u) => u.ux * d.ux + u.uz * d.uz > 0.9)) continue; used.push(d);
          // approach comes from along +d (away from node): pole on the left of someone driving towards the node = right side of d
          const px = sx + d.ux * (d.w / 2 + 3) - d.uz * (d.w / 2 + 1.2), pz = sz + d.uz * (d.w / 2 + 3) + d.ux * (d.w / 2 + 1.2);
          const face = Math.atan2(-d.ux, -d.uz);   // head faces the traffic coming towards the node
          const axis = Math.abs(Math.atan2(d.uz, d.ux)) % Math.PI < Math.PI / 4 || Math.abs(Math.atan2(d.uz, d.ux)) % Math.PI > 3 * Math.PI / 4 ? 0 : 1;
          poles.push({ x: px, z: pz, h: 4.2 }); heads.push({ x: px, z: pz, yaw: face, axis, node: sx * 7 + sz * 13 });
          obstacles.push({ type: 'circle', x: px, z: pz, r: 0.15 });
        }
      } else if (kind === 'stop') {
        const px = sx - rx * (w / 2 + 0.9), pz = sz - rz * (w / 2 + 0.9);   // left of the road at the stop line (drive on the left)
        poles.push({ x: px, z: pz, h: 2.4 }); stops.push({ x: px, z: pz, yaw: h }); obstacles.push({ type: 'circle', x: px, z: pz, r: 0.12 });
      } else if (kind === 'hump') {
        humps.push({ x: nr.px, z: nr.pz, yaw: h, w });
      } else if (kind === 'xing') {
        for (let k = -2; k <= 2; k++) { const o = k * (w / 6); stripes.push({ x: nr.px + rx * o, z: nr.pz + rz * o, yaw: h, len: w / 6 * 0.55 }); }
      }
    }
    // street-name signs: at junctions of two differently named roads (one corner, both names)
    const seen = new Set(); let nSigns = 0;
    for (const ri of (this.tileRoads.get(tk) || [])) {
      const r = this.roads[ri]; if (!r.name || nSigns > 28) continue;
      for (const ni of r.n) {
        if (seen.has(ni)) continue; const p = N[ni]; if (p[0] < x0 || p[0] >= x0 + TILE || p[1] < z0 || p[1] >= z0 + TILE) continue;
        const others = (this.nodeRoads.get(ni) || []).map(([rj]) => this.roads[rj]).filter((o) => o.name && o.name !== r.name && !/service|track/.test(o.t));
        if (!others.length) continue; seen.add(ni);
        const o = others[0]; const a = N[r.n[Math.max(0, r.n.indexOf(ni) - 1)]], b = N[r.n[Math.min(r.n.length - 1, r.n.indexOf(ni) + 1)]];
        let ex = b[0] - a[0], ez = b[1] - a[1]; const L = Math.hypot(ex, ez) || 1; ex /= L; ez /= L;
        const ok = o.n.indexOf(ni); const oa = N[o.n[Math.max(0, ok - 1)]], ob = N[o.n[Math.min(o.n.length - 1, ok + 1)]]; let ox = ob[0] - oa[0], oz = ob[1] - oa[1]; const OL = Math.hypot(ox, oz) || 1; ox /= OL; oz /= OL;
        // corner = node + (r.w/2+1.3) along o's normal + (o.w/2+1.3) along r's normal
        const cx = p[0] + (-ez) * (o.w / 2 + 1.6) + (-oz) * (r.w / 2 + 1.6), cz = p[1] + ex * (o.w / 2 + 1.6) + ox * (r.w / 2 + 1.6);
        if (this.nearest(cx, cz).d < 3.5) continue;
        poles.push({ x: cx, z: cz, h: 2.6 }); boards.push({ x: cx, z: cz, yaw: Math.atan2(-ez, ex), name: r.name, y: 2.45 }); boards.push({ x: cx, z: cz, yaw: Math.atan2(-oz, ox), name: o.name, y: 2.15 });
        obstacles.push({ type: 'circle', x: cx, z: cz, r: 0.1 }); nSigns++;
      }
    }
    if (poles.length) { const im = new THREE.InstancedMesh(this.poleGeo, this.mat.pole, poles.length); poles.forEach((q, k) => { _p.set(q.x, 0, q.z); _e.set(0, 0, 0); _q.setFromEuler(_e); _s.set(1, q.h, 1); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); }); im.castShadow = true; im.userData.shared = true; g.add(im); }
    if (heads.length) {
      const hm = new THREE.InstancedMesh(this.tlHeadGeo, this.mat.tlHead, heads.length); const bm = new THREE.InstancedMesh(this.tlBulbGeo, this.mat.bulb, heads.length * 3);
      heads.forEach((q, k) => {
        _p.set(q.x, 3.6, q.z); _e.set(0, q.yaw, 0); _q.setFromEuler(_e); _s.set(1, 1, 1); _m.compose(_p, _q, _s); hm.setMatrixAt(k, _m);
        const fx = -Math.sin(q.yaw), fz = -Math.cos(q.yaw);
        [0.36, 0, -0.36].forEach((dy, j) => { _p.set(q.x + fx * 0.16, 3.6 + dy, q.z + fz * 0.16); _m.compose(_p, _q, _s); bm.setMatrixAt(k * 3 + j, _m); bm.setColorAt(k * 3 + j, new THREE.Color(0x222222)); });
      });
      hm.userData.shared = true; bm.userData.shared = true; g.add(hm, bm);
      this.tlHeads.push({ tile: tk, mesh: bm, heads });
    }
    if (stops.length) { const geo = new THREE.PlaneGeometry(0.75, 0.75); const im = new THREE.InstancedMesh(geo, this.mat.stop, stops.length); stops.forEach((q, k) => { _p.set(q.x, 2.1, q.z); _e.set(0, q.yaw, 0); _q.setFromEuler(_e); _s.set(1, 1, 1); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); }); g.add(im); }
    if (humps.length) { const im = new THREE.InstancedMesh(this.humpGeo, this.mat.hump, humps.length); humps.forEach((q, k) => { _p.set(q.x, 0.02, q.z); _e.set(0, q.yaw, 0); _q.setFromEuler(_e); _s.set(q.w - 0.6, 0.24, 0.9); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); }); im.userData.shared = true; g.add(im); this.humpList = this.humpList || []; }
    if (stripes.length) { const geo = new THREE.PlaneGeometry(1, 1); geo.rotateX(-Math.PI / 2); const im = new THREE.InstancedMesh(geo, this.mat.stripe, stripes.length); stripes.forEach((q, k) => { _p.set(q.x, 0.1, q.z); _e.set(0, q.yaw, 0); _q.setFromEuler(_e); _s.set(q.len, 1, 2.2); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); }); im.userData.shared = true; g.add(im); }
    for (const b of boards) { const m = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.25), this.streetSignMaterial(b.name)); m.position.set(b.x, b.y, b.z); m.rotation.y = b.yaw; g.add(m); }
    return { humps };
  }
  // traffic light phases: axis 0 and axis 1 alternate (8 s green, 2 s amber, 2 s all red)
  tickLights(t, px, pz) {
    const cyc = t % 24; const c = new THREE.Color();
    for (const h of this.tlHeads) {
      if (!h.mesh.parent) continue;
      const first = h.heads[0]; if (Math.abs(first.x - px) > 300 || Math.abs(first.z - pz) > 300) continue;
      h.heads.forEach((q, k) => {
        const ph = (cyc + (q.node % 7)) % 24; const mine = q.axis === 0 ? ph : (ph + 12) % 24;
        const st = mine < 8 ? 'g' : mine < 10 ? 'a' : 'r';
        h.mesh.setColorAt(k * 3, c.setHex(st === 'r' ? 0xff2020 : 0x330808)); h.mesh.setColorAt(k * 3 + 1, c.setHex(st === 'a' ? 0xffb020 : 0x332008)); h.mesh.setColorAt(k * 3 + 2, c.setHex(st === 'g' ? 0x20ff60 : 0x083318));
      });
      h.mesh.instanceColor.needsUpdate = true;
    }
  }

  makeMaterials() {
    const st = this.style; const M = this.M;
    const std = (o) => new THREE.MeshStandardMaterial(o);
    this.mat = {
      road: M.road, roadDirt: std({ map: st.tex('sand'), color: 0x9a8a6a, roughness: 1 }), line: M.line, rail: M.rail,
      house: st.fMatsHouse, wall: st.wallMat, roof: st.roofTileMat, roofFlat: std({ color: 0x5a5e66, roughness: 1 }),
      park: std({ map: st.tex('grass'), color: 0x8fbf6a, roughness: 1 }), pitch: std({ map: st.tex('grass'), color: 0x6fb45a, roughness: 1 }),
      water: std({ color: 0x3f7fb0, roughness: 0.1, metalness: 0.3, envMapIntensity: 1.5 }), farm: std({ map: st.tex('sand'), color: 0xb8a070, roughness: 1 }),
      lot: std({ map: st.tex('pavement'), color: 0xaaaaaa, roughness: 1 }), scrub: std({ map: st.tex('grass'), color: 0xa09c6a, roughness: 1 }),
      railbed: std({ color: 0x55504a, roughness: 1 }), railsteel: std({ color: 0x8a8d90, roughness: 0.4, metalness: 0.8 }),
      pavement: std({ map: st.tex('pavement'), color: 0xb9b6ad, roughness: 1 }), kerb: std({ color: 0x9a9890, roughness: 0.9, side: THREE.DoubleSide }), lineYellow: std({ color: 0xe8c43a, roughness: 0.7 }),
      white: std({ color: 0xf2efe6, roughness: 0.8 }), dome: std({ color: 0x3f9d7a, roughness: 0.35, metalness: 0.2 }), gold: std({ color: 0xd0b46c, roughness: 0.3, metalness: 0.7 }), navy: std({ color: 0x17283c, roughness: 0.6 }),
    };
    for (const m of [this.mat.park, this.mat.pitch, this.mat.farm, this.mat.lot, this.mat.scrub]) { m.map = m.map.clone(); m.map.repeat.set(1 / 8, 1 / 8); m.map.needsUpdate = true; }
    this.mat.pavement.map = this.mat.pavement.map.clone(); this.mat.pavement.map.repeat.set(1, 1); this.mat.pavement.map.needsUpdate = true;
    this.houseGeo = new THREE.BoxGeometry(1, 1, 1); this.houseGeo.translate(0, 0.5, 0);
    const uv = this.houseGeo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 2.6, uv.getY(i) * 1);
    this.roofGeo = new THREE.ConeGeometry(1, 1, 4); this.roofGeo.rotateY(Math.PI / 4); this.roofGeo.translate(0, 0.5, 0);
    this.wallGeo = new THREE.BoxGeometry(1, 1, 1); this.wallGeo.translate(0, 0.5, 0);
    const wuv = this.wallGeo.attributes.uv; for (let i = 0; i < wuv.count; i++) wuv.setXY(i, wuv.getX(i) * 3, wuv.getY(i) * 0.5);
    const huv = this.houseGeo.attributes.uv; for (let i = 0; i < huv.count; i++) huv.setXY(i, huv.getX(i), huv.getY(i));
    this.fenceGeo = new THREE.PlaneGeometry(1, 1); this.fenceGeo.rotateY(Math.PI / 2); this.fenceGeo.translate(0, 0.5, 0);
    { const fuv = this.fenceGeo.attributes.uv; for (let i = 0; i < fuv.count; i++) fuv.setXY(i, fuv.getX(i) * 2, fuv.getY(i)); }
    this.humpGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 10); this.humpGeo.rotateZ(Math.PI / 2);   // cylinder lying along local x (= across the road)
    this.poleGeo = new THREE.CylinderGeometry(0.07, 0.09, 1, 7); this.poleGeo.translate(0, 0.5, 0);
    this.tlHeadGeo = new THREE.BoxGeometry(0.42, 1.15, 0.3); this.tlBulbGeo = new THREE.SphereGeometry(0.13, 8, 6);
    this.mat.tlHead = new THREE.MeshStandardMaterial({ color: 0x1a1d22, roughness: 0.6 }); this.mat.pole = new THREE.MeshStandardMaterial({ color: 0x8a8d90, roughness: 0.5, metalness: 0.7 });
    this.mat.bulb = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.0, roughness: 0.4 });
    this.mat.stop = this.stopMaterial(); this.mat.hump = new THREE.MeshStandardMaterial({ color: 0x6a6a6a, roughness: 1 });
    this.mat.stripe = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: 0.7 });
  }

  // ---------------------------------------------------------------- tiles
  ensure(x, z) {
    const tx = Math.floor(x / TILE), tz = Math.floor(z / TILE); const R = 2;
    for (const [tk, t] of this.tiles) if (Math.abs(t.tx - tx) > R + 1 || Math.abs(t.tz - tz) > R + 1) { this.disposeTile(t); this.tiles.delete(tk); }
    let built = 0;
    for (let dx = -R; dx <= R; dx++) for (let dz = -R; dz <= R; dz++) {
      if (built >= 1 && (Math.abs(dx) > 1 || Math.abs(dz) > 1)) continue;   // spread the work over frames
      const tk = this.key(tx + dx, tz + dz); if (this.tiles.has(tk)) continue;
      this.tiles.set(tk, this.buildTile(tx + dx, tz + dz, tk)); built++;
    }
  }
  obstaclesNear(x, z) {
    const out = []; const tx = Math.floor(x / TILE), tz = Math.floor(z / TILE);
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) { const t = this.tiles.get(this.key(tx + dx, tz + dz)); if (t) for (const o of t.obstacles) if (Math.abs(o.x - x) < 60 && Math.abs(o.z - z) < 60) out.push(o); }
    return out;
  }
  disposeTile(t) {
    this.group.remove(t.group); removeStars('t' + t.tx + '_' + t.tz);
    this.tlHeads = this.tlHeads.filter((h) => h.tile !== this.key(t.tx, t.tz));
    t.group.traverse((o) => { if (o.isInstancedMesh) { o.dispose(); return; } if (o.geometry && !o.userData.shared) o.geometry.dispose(); });
    for (const ri of t.roads) { const rm = this.roadMeshes.get(ri); if (rm && --rm.refs <= 0) { this.group.remove(rm.mesh); rm.mesh.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); this.roadMeshes.delete(ri); } }
    for (const ai of t.areas) { const am = this.areaMeshes.get(ai); if (am && --am.refs <= 0) { this.group.remove(am.mesh); am.mesh.geometry.dispose(); this.areaMeshes.delete(ai); } }
  }

  buildTile(tx, tz, tk) {
    const g = new THREE.Group(); const obstacles = []; const N = this.nodes;
    const x0 = tx * TILE, z0 = tz * TILE;
    // roads (shared meshes, refcounted)
    const roads = this.tileRoads.get(tk) || [];
    for (const ri of roads) { let rm = this.roadMeshes.get(ri); if (!rm) { rm = { refs: 0, mesh: this.buildRoad(ri) }; this.roadMeshes.set(ri, rm); this.group.add(rm.mesh); } rm.refs++; }
    // junction discs for nodes in this tile
    const discs = [];
    for (const ri of roads) { const r = this.roads[ri]; for (const ni of r.n) { const p = N[ni]; if (p[0] < x0 || p[0] >= x0 + TILE || p[1] < z0 || p[1] >= z0 + TILE) continue; const lst = this.nodeRoads.get(ni); if (!lst || lst.length < 2) continue; let w = 0, y = 0; for (const [rj] of lst) { w = Math.max(w, this.roads[rj].w); y = Math.max(y, ROAD_Y[this.roads[rj].t] || 0.06); } if (!discs.find((d) => d[0] === ni)) discs.push([ni, p, w, y]); } }
    if (discs.length) { const geos = discs.map(([, p, w, y]) => { const c = new THREE.CircleGeometry(w / 2, 14); c.rotateX(-Math.PI / 2); c.translate(p[0], y + 0.002, p[1]); const uv = c.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / 7, uv.getY(i) * w / 7); return c; }); const dm = new THREE.Mesh(mergeGeos(geos), this.mat.road); dm.receiveShadow = true; g.add(dm); }
    // areas (parks, water, pitches, ...)
    for (const ai of (this.tileAreas.get(tk) || [])) { let am = this.areaMeshes.get(ai); if (!am) { const mesh = this.buildArea(ai); if (!mesh) continue; am = { refs: 0, mesh }; this.areaMeshes.set(ai, am); this.group.add(mesh); } am.refs++; }
    // petrol stations
    for (const p of (this.tilePois.get(tk) || [])) if (p.k === 'fuel' && !this.nearBuilding(p.c[0], p.c[1], 6)) this.buildFuel(p, g, obstacles);
    // mapped buildings
    for (const bi of (this.tileBuildings.get(tk) || [])) { const b = this.data.buildings[bi]; const mesh = this.buildBuilding(b); if (!mesh) continue; g.add(mesh); const ob = obbOf(b.p); obstacles.push({ type: 'box', ...ob }); }
    // procedural houses along residential streets + street trees
    const houses = [], trees = [], jacs = [], palms = [];
    for (const ri of roads) {
      const r = this.roads[ri]; if (!/residential|unclassified|living_street/.test(r.t)) continue;
      const step = 21; let acc = 10, seq = 0;
      for (let i = 0; i < r.n.length - 1; i++) {
        const a = N[r.n[i]], b = N[r.n[i + 1]]; const L = r.seg[i]; const ux = (b[0] - a[0]) / L, uz = (b[1] - a[1]) / L; const rx = -uz, rz = ux;
        for (; acc < L; acc += step) {
          seq++;
          const px = a[0] + ux * acc, pz = a[1] + uz * acc;
          if (px < x0 || px >= x0 + TILE || pz < z0 || pz >= z0 + TILE) continue;
          for (const side of [-1, 1]) {
            const h1 = hash(ri, seq, side + 2); if (h1 < 0.18) continue;          // some empty plots
            const setback = r.w / 2 + 8.5 + hash(ri, seq, side + 7) * 3;
            const hx = px + rx * side * setback, hz = pz + rz * side * setback;
            // don't build on another road or on a mapped building
            const nr = this.nearest(hx, hz, { exclude: ri }); if (nr.d < nr.w / 2 + 7) continue;
            if (this.nearest(hx + ux * 6, hz + uz * 6, { exclude: ri }).d < 6 || this.nearest(hx - ux * 6, hz - uz * 6, { exclude: ri }).d < 6) continue;
            if (this.nearBuilding(hx, hz, 14)) continue;
            const yaw = Math.atan2(-ux, -uz) + (side === 1 ? Math.PI : 0);
            // style: Lenasia mix — face brick double storeys, plastered single storeys with arches, modern plaster
            const sr = hash(ri, seq, 41); const style = sr < 0.38 ? 'arch' : sr < 0.72 ? 'brick' : 'modern';
            const two = style !== 'arch' ? hash(ri, seq, 43) < 0.75 : hash(ri, seq, 43) < 0.12;
            const hw = 5.5 + hash(ri, seq, 11) * 1.8, hd = 4.5 + hash(ri, seq, 13) * 1.4; const hh = (two ? 6.3 : 3.3) + hash(ri, seq, 17) * 0.4;
            houses.push({ x: hx, z: hz, yaw, hw, hd, hh, style, flat: style === 'modern' });
            obstacles.push({ type: 'box', x: hx, z: hz, hw: hd, hl: hw, h: yaw });
            // boundary wall (precast or palisade) at the street with a driveway gap
            const woff = r.w / 2 + 2.2; const wx = px + rx * side * woff, wz = pz + rz * side * woff;
            const gapAt = (hash(ri, seq, 23) - 0.5) * 8; const palisade = hash(ri, seq, 47) < 0.45;
            for (const wo of [gapAt - 5.5, gapAt + 5.5]) {
              const cxw = wx + ux * wo, czw = wz + uz * wo;
              // never put a wall across a side street
              let clear = true;
              for (const e of [-3.75, 0, 3.75]) { const q = this.nearest(cxw + ux * e, czw + uz * e, { exclude: ri }); if (q.d < q.w / 2 + 2.5) { clear = false; break; } }
              if (!clear) continue;
              houses.push({ wall: true, palisade, x: cxw, z: czw, yaw, len: 7.5 });
              obstacles.push({ type: 'box', x: cxw, z: czw, hw: 0.15, hl: 3.75, h: yaw });
            }
            if (hash(ri, seq, 29) < 0.35) { const tx2 = px + rx * side * (r.w / 2 + 1.1) + ux * 6, tz2 = pz + rz * side * (r.w / 2 + 1.1) + uz * 6; const jac = hash(ri, seq, 53) < 0.5; (jac ? jacs : trees).push({ x: tx2, z: tz2, scale: 0.6 + hash(ri, seq, 31) * 0.5, rot: hash(ri, seq, 37) * 6.28 }); obstacles.push({ type: 'circle', x: tx2, z: tz2, r: 0.4 }); }
          }
        }
        acc -= L;
      }
    }
    const ws = houses.filter((h) => h.wall);
    for (const style of ['arch', 'brick', 'modern']) {
      const hs = houses.filter((h) => !h.wall && h.style === style); if (!hs.length) continue;
      const im = new THREE.InstancedMesh(this.houseGeo, this.style.lenMats[style], hs.length);
      const pitched = hs.filter((h) => !h.flat), flat = hs.filter((h) => h.flat);
      const roofs = pitched.length ? new THREE.InstancedMesh(this.roofGeo, this.mat.roof, pitched.length) : null;
      const caps = flat.length ? new THREE.InstancedMesh(this.wallGeo, this.mat.roofFlat, flat.length) : null;
      hs.forEach((h, k) => { _p.set(h.x, 0, h.z); _e.set(0, h.yaw, 0); _q.setFromEuler(_e); _s.set(h.hd * 2, h.hh, h.hw * 2); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); });
      pitched.forEach((h, k) => { _p.set(h.x, h.hh, h.z); _e.set(0, h.yaw, 0); _q.setFromEuler(_e); _s.set((h.hd + 0.6) * 2 * Math.SQRT1_2, 2.0 + h.hd * 0.12, (h.hw + 0.6) * 2 * Math.SQRT1_2); _m.compose(_p, _q, _s); roofs.setMatrixAt(k, _m); });
      flat.forEach((h, k) => { _p.set(h.x, h.hh, h.z); _e.set(0, h.yaw, 0); _q.setFromEuler(_e); _s.set(h.hd * 2 + 0.3, 0.35, h.hw * 2 + 0.3); _m.compose(_p, _q, _s); caps.setMatrixAt(k, _m); });
      im.castShadow = true; im.receiveShadow = true; im.userData.shared = true; g.add(im);
      if (roofs) { roofs.castShadow = true; roofs.userData.shared = true; g.add(roofs); }
      if (caps) { caps.userData.shared = true; g.add(caps); }
    }
    for (const pal of [false, true]) {
      const list = ws.filter((w) => !!w.palisade === pal); if (!list.length) continue;
      const im = new THREE.InstancedMesh(pal ? this.fenceGeo : this.wallGeo, pal ? this.style.palisadeMat : this.mat.wall, list.length);
      list.forEach((w, k) => { _p.set(w.x, 0, w.z); _e.set(0, w.yaw, 0); _q.setFromEuler(_e); _s.set(pal ? 1 : 0.25, 1.8, w.len); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); });
      im.castShadow = !pal; im.userData.shared = true; g.add(im);
    }
    // main roads: lamp posts, jacarandas/palms on the verge, pavements are part of the road mesh
    { let nl = 0; const lampsAt = [];
      for (const ri of roads) {
        const r = this.roads[ri]; if (!/primary|secondary|tertiary|trunk/.test(r.t) || /link/.test(r.t)) continue;
        let acc = 12 + hash(ri, 3) * 20, seq = 0;
        for (let i = 0; i < r.n.length - 1; i++) {
          const a = N[r.n[i]], b = N[r.n[i + 1]]; const L = r.seg[i]; const ux = (b[0] - a[0]) / L, uz = (b[1] - a[1]) / L; const rx = -uz, rz = ux;
          for (; acc < L - 4; acc += 34) {
            seq++; const px = a[0] + ux * acc, pz = a[1] + uz * acc;
            if (px < x0 || px >= x0 + TILE || pz < z0 || pz >= z0 + TILE) continue;
            const side = seq % 2 ? -1 : 1; const off = side * (r.w / 2 + 1.0);
            const lx = px + rx * off, lz = pz + rz * off;
            if (this.nearest(lx, lz, { exclude: ri }).d < 4) continue;
            lampsAt.push({ x: lx, z: lz, h: Math.atan2(-ux, -uz) + (side === 1 ? Math.PI / 2 : -Math.PI / 2) }); nl++;
            obstacles.push({ type: 'circle', x: lx, z: lz, r: 0.2 });
            if (seq % 3 === 0) { const tx3 = px + rx * -side * (r.w / 2 + 1.4), tz3 = pz + rz * -side * (r.w / 2 + 1.4); if (this.nearest(tx3, tz3, { exclude: ri }).d > 4 && !this.nearBuilding(tx3, tz3, 9)) { (hash(ri, seq, 61) < 0.5 ? palms : jacs).push({ x: tx3, z: tz3, scale: 0.9 + hash(ri, seq, 63) * 0.4, rot: hash(ri, seq, 67) * 6.28 }); obstacles.push({ type: 'circle', x: tx3, z: tz3, r: 0.45 }); } }
          }
          acc -= L;
        }
      }
      if (nl) {
        const M = this.M; const lamps = new THREE.InstancedMesh(M.lampGeo, M.lamp, nl), glows = new THREE.InstancedMesh(M.lampGlowGeo, M.lampGlow, nl), pools = new THREE.InstancedMesh(M.poolGeo, M.pool, nl);
        lampsAt.forEach((l, k) => { _p.set(l.x, 0, l.z); _e.set(0, l.h, 0); _q.setFromEuler(_e); _s.set(1, 1, 1); _m.compose(_p, _q, _s); lamps.setMatrixAt(k, _m); glows.setMatrixAt(k, _m); pools.setMatrixAt(k, _m); });
        lamps.castShadow = true; pools.renderOrder = 2; for (const im of [lamps, glows, pools]) { im.userData.shared = true; im.frustumCulled = false; g.add(im); }
      }
    }
    // street furniture: traffic lights, stop signs, speed humps, crossings, street-name signs
    const furn = this.buildFurniture(tx, tz, tk, g, obstacles);
    // trees: mapped trees + park trees + street trees
    for (const t of (this.tileTrees.get(tk) || [])) { trees.push({ x: t[0], z: t[1], scale: 0.8 + hash(t[0] | 0, t[1] | 0) * 0.5, rot: 0 }); obstacles.push({ type: 'circle', x: t[0], z: t[1], r: 0.5 }); }
    for (const ai of (this.tileAreas.get(tk) || [])) { const a = this.data.areas[ai]; if (a.k !== 'park' && a.k !== 'grass') continue; const c = centroid(a.p); if (c[0] < x0 || c[0] >= x0 + TILE || c[1] < z0 || c[1] >= z0 + TILE) continue; const bb = bboxOf(a.p); const n = Math.min(14, Math.floor((bb[2] - bb[0]) * (bb[3] - bb[1]) / 2500)); for (let k = 0; k < n; k++) { const px = bb[0] + hash(ai, k, 1) * (bb[2] - bb[0]), pz = bb[1] + hash(ai, k, 2) * (bb[3] - bb[1]); if (!pointInPoly(px, pz, a.p)) continue; if (this.nearest(px, pz).d < 8) continue; trees.push({ x: px, z: pz, scale: 0.9 + hash(ai, k, 3) * 0.5, rot: 0 }); obstacles.push({ type: 'circle', x: px, z: pz, r: 0.5 }); } }
    if (trees.length) { const [tr, cd] = buildTrees(this.style.treeStyles.oakTree, trees); tr.userData.shared = true; cd.userData.shared = true; g.add(tr, cd); }
    for (const [list, parts] of [[jacs, this.style.jacaranda], [palms, this.style.palm]]) {
      if (!list.length || !parts) continue;
      for (const pt of parts) { const im = new THREE.InstancedMesh(pt.geometry, pt.material, list.length); list.forEach((t, k) => { _p.set(t.x, 0, t.z); _e.set(0, t.rot, 0); _q.setFromEuler(_e); _s.set(t.scale, t.scale, t.scale); _m.compose(_p, _q, _s); im.setMatrixAt(k, _m); }); im.castShadow = true; im.userData.shared = true; im.frustumCulled = false; g.add(im); }
    }
    // stars along the streets (left lane of travel, both directions), a line of three every ~90 m
    { let nStars = 0;
      for (const ri of roads) {
        const r = this.roads[ri]; if (r.t === 'service' || r.t === 'track' || r.len < 60) continue;
        let acc = 30 + hash(ri, 1) * 40, seq = 0;
        for (let i = 0; i < r.n.length - 1 && nStars < 30; i++) {
          const a = N[r.n[i]], b = N[r.n[i + 1]]; const L = r.seg[i]; const ux = (b[0] - a[0]) / L, uz = (b[1] - a[1]) / L; const rx = -uz, rz = ux;
          for (; acc + 12 < L && nStars < 30; acc += 90) {
            seq++; const px = a[0] + ux * acc, pz = a[1] + uz * acc;
            if (px < x0 || px >= x0 + TILE || pz < z0 || pz >= z0 + TILE) continue;
            const side = hash(ri, seq, 5) < 0.5 ? -1 : 1; const off = side * r.w / 4;
            for (let k = 0; k < 3; k++) addStar(px + ux * k * 5 + rx * off, pz + uz * k * 5 + rz * off, 't' + tx + '_' + tz);
            nStars += 3;
          }
          acc -= L;
        }
      }
    }
    // Glyde-X showroom landmark
    if (this.style.showroomAt && Math.floor(this.style.showroomAt[0] / TILE) === tx && Math.floor(this.style.showroomAt[1] / TILE) === tz) {
      const b = this.style.makeBuilding(true); const [sx, sz, syaw] = this.style.showroomAt; b.group.position.set(sx, 0, sz); b.group.rotation.y = syaw; g.add(b.group);
      obstacles.push({ type: 'box', x: sx, z: sz, hw: b.w / 2, hl: b.d / 2, h: syaw });
    }
    this.group.add(g);
    return { tx, tz, group: g, obstacles, roads, areas: this.tileAreas.get(tk) || [], humps: furn.humps };
  }
  // is the point on a speed hump? returns the hump record or null
  humpAt(x, z) {
    const t = this.tiles.get(this.key(Math.floor(x / TILE), Math.floor(z / TILE))); if (!t || !t.humps) return null;
    for (const h of t.humps) { const dx = x - h.x, dz = z - h.z; if (dx * dx + dz * dz > h.w * h.w) continue; const fx = -Math.sin(h.yaw), fz = -Math.cos(h.yaw); const along = dx * fx + dz * fz; if (Math.abs(along) < 0.6) return h; }
    return null;
  }
  nearBuilding(x, z, dist) {
    const tx = Math.floor(x / TILE), tz = Math.floor(z / TILE);
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) for (const bi of (this.tileBuildings.get(this.key(tx + dx, tz + dz)) || [])) { const c = this.data.buildings[bi].c; if (Math.hypot(c[0] - x, c[1] - z) < dist) return true; }
    return false;
  }

  buildRoad(ri) {
    const r = this.roads[ri]; const N = this.nodes; const pts = r.n.map((i) => N[i]); const w = r.w; const y = ROAD_Y[r.t] || 0.06;
    const g = new THREE.Group();
    const mat = r.t === 'track' ? this.mat.roadDirt : this.mat.road;
    const main = new THREE.Mesh(ribbon(pts, -w / 2, w / 2, y, 1 / 7), mat); main.receiveShadow = true; g.add(main);
    // end caps
    const caps = [pts[0], pts[pts.length - 1]].map((p) => { const c = new THREE.CircleGeometry(w / 2, 12); c.rotateX(-Math.PI / 2); c.translate(p[0], y, p[1]); return c; });
    g.add(new THREE.Mesh(mergeGeos(caps), mat));
    // pavements with a kerb on streets (not highways / service roads)
    if (/residential|tertiary|secondary|primary|unclassified|living_street/.test(r.t) && !/link/.test(r.t)) {
      for (const sx of [-1, 1]) { const pv = new THREE.Mesh(ribbon(pts, sx * (w / 2 - 0.05), sx * (w / 2 + 1.9), y + 0.12, 1 / 4), this.mat.pavement); pv.receiveShadow = true; g.add(pv); g.add(new THREE.Mesh(ribbon(pts, sx * (w / 2 - 0.08), sx * (w / 2 - 0.05), y, 1, y + 0.12), this.mat.kerb)); }
    }
    if (w >= 8.4) {
      // yellow edge lines (South African roads) + white lane dashes
      for (const sx of [-1, 1]) g.add(new THREE.Mesh(ribbon(pts, sx * (w / 2 - 0.45), sx * (w / 2 - 0.3), y + 0.01, 1), this.mat.lineYellow));
      const lanes = r.one ? Math.max(2, r.lanes || Math.round(w / 3.6)) : 2; const dashes = [];
      const offs = []; if (r.one) { for (let k = 1; k < lanes; k++) offs.push(-w / 2 + (w / lanes) * k); } else offs.push(0);
      let s = 0; const total = r.len;
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i], b = pts[i + 1]; const L = r.seg[i]; const ux = (b[0] - a[0]) / L, uz = (b[1] - a[1]) / L; const rx = -uz, rz = ux;
        for (let d = (9 - (s % 9)) % 9; d + 3 < L; d += 9) for (const o of offs) {
          const p0 = [a[0] + ux * d + rx * o, a[1] + uz * d + rz * o], p1 = [a[0] + ux * (d + 3) + rx * o, a[1] + uz * (d + 3) + rz * o];
          dashes.push(ribbon([p0, p1], -0.08, 0.08, y + 0.01, 1));
        }
        s += L;
      }
      if (dashes.length) g.add(new THREE.Mesh(mergeGeos(dashes), this.mat.line));
    }
    return g;
  }
  buildArea(ai) {
    const a = this.data.areas[ai]; if (a.p.length < 3) return null;
    const mat = { park: this.mat.park, grass: this.mat.park, pitch: this.mat.pitch, water: this.mat.water, wet: this.mat.water, farm: this.mat.farm, ind: this.mat.lot, com: this.mat.lot, park_lot: this.mat.lot, scrub: this.mat.scrub, school: this.mat.park, quarry: this.mat.farm }[a.k];
    if (!mat) return null;
    const shape = new THREE.Shape(a.p.map((p) => new THREE.Vector2(p[0], -p[1])));
    const geo = new THREE.ShapeGeometry(shape); geo.rotateX(-Math.PI / 2);
    const y = { water: 0.03, wet: 0.025, park: 0.02, grass: 0.02, pitch: 0.022, farm: 0.015, scrub: 0.015, ind: 0.018, com: 0.018, park_lot: 0.019, school: 0.02, quarry: 0.015 }[a.k] || 0.02;
    geo.translate(0, y, 0);
    const m = new THREE.Mesh(geo, mat); m.receiveShadow = true; return m;
  }
  buildBuilding(b) {
    if (b.p.length < 3) return null;
    const st = this.style; const LM = st.lenMats; const label = b.k + ' ' + (b.am || '') + ' ' + (b.shop || '') + ' ' + (b.name || '');
    const isMosque = b.rel === 'muslim' || /masjid|mosque|islam|jumma|sufi|musallah/i.test(label) || (b.k === 'mosque');
    const isTemple = b.rel === 'hindu' || /temple|koil|mandir|sai centre|hindu/i.test(label);
    const isChurch = b.rel === 'christian' || /church|chapel|catholic|kingdom hall/i.test(label);
    const isMall = /mall|supermarket|plaza|shopping|centre|center|hyper|spar|pick n pay|checkers|shoprite/i.test(label) && !/school|clinic|community|civic|sports|recreation|health/i.test(label);
    const isShop = !isMall && /retail|commercial|shop|kfc|mcdonald|hardware|station|store|pharmacy|chemist|butcher|cafe|restaurant|takeaway/i.test(label);
    const isSchool = /school|college|madressa|madrasah|academy/i.test(label);
    const isInstit = /hospital|clinic|police|library|court|civic|municipal|community|hall|post office|bank/i.test(label);
    const isFlats = /apartments|flats|residential;?apartments/i.test(b.k);
    const bb = bboxOf(b.p); const span = Math.min(bb[2] - bb[0], bb[3] - bb[1]); const area = polyArea(b.p);
    // heights: OSM mostly has none, so use what the place is
    let h = b.lv ? b.lv * 3.3 : b.h;
    if (!b.lv) { if (isMosque) h = Math.max(h, 7.5); else if (isMall) h = Math.max(h, area > 2500 ? 9 : 7); else if (isSchool || isInstit) h = Math.max(h, 6.6); else if (isFlats) h = Math.max(h, 9.6); else if (isShop) h = Math.max(h, 5.5); else if (b.k === 'house' || b.k === 'residential' || b.k === 'yes') h = Math.max(h, hash(b.c[0] | 0, b.c[1] | 0, 5) < 0.45 && area > 110 ? 6.3 : 3.5); }
    const shape = new THREE.Shape(b.p.map((p) => new THREE.Vector2(p[0], -p[1])));
    const geo = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false }); geo.rotateX(-Math.PI / 2);
    // wall uvs: ExtrudeGeometry's side uvs are in metres already (u along the wall, v up) → scale to texture tiles
    { const uv = geo.attributes.uv; const pos = geo.attributes.position; const sideStart = geo.groups[1] ? geo.groups[1].start : 0; for (let i = 0; i < uv.count; i++) { uv.setXY(i, uv.getX(i) / 9, uv.getY(i) / (h > 7 ? h / 2 : h)); } void sideStart; void pos; }
    const house = hash(b.c[0] | 0, b.c[1] | 0, 9); const houseMat = house < 0.4 ? LM.arch : house < 0.75 ? LM.brick : LM.modern;
    const mat = isMosque ? LM.mosque : (isTemple || isChurch) ? this.mat.white : isMall ? LM.mall : isShop ? LM.shops : (isSchool || isInstit || isFlats) ? LM.flats : h > 7.5 ? LM.flats : houseMat;
    const m = new THREE.Mesh(geo, [this.mat.roofFlat, mat]); m.castShadow = true; m.receiveShadow = true;
    const g = new THREE.Group(); g.add(m);
    const c = b.c;
    // pitched tile roofs on ordinary houses that are roughly rectangular
    if (!isMosque && !isTemple && !isChurch && !isMall && !isShop && !isSchool && !isInstit && !isFlats && h <= 7 && b.p.length <= 6 && span > 5) {
      const ob = obbOf(b.p); const roof = new THREE.Mesh(this.roofGeo, this.mat.roof); roof.position.set(ob.x, h, ob.z); roof.rotation.y = ob.h; roof.scale.set((ob.hw + 0.5) * 2 * Math.SQRT1_2, 1.8 + ob.hw * 0.15, (ob.hl + 0.5) * 2 * Math.SQRT1_2); roof.castShadow = true; roof.userData.shared = true; g.add(roof);
    }
    // landmark shapes so places are recognisable from the road
    if (isMosque) {
      const R = Math.min(7, Math.max(2.5, span * 0.26));
      const dome = new THREE.Mesh(new THREE.SphereGeometry(R, 24, 14, 0, Math.PI * 2, 0, Math.PI / 2), this.mat.dome); dome.position.set(c[0], h, c[1]); dome.castShadow = true; g.add(dome);
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 1.2, 24), this.mat.white); drum.position.set(c[0], h + 0.6, c[1]); g.add(drum); dome.position.y = h + 1.2;
      const cres = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.09, 6, 18, Math.PI * 1.5), this.mat.gold); cres.position.set(c[0], h + 1.2 + R + 0.8, c[1]); cres.rotation.z = Math.PI * 0.25; g.add(cres);
      const fin = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.0, 6), this.mat.gold); fin.position.set(c[0], h + 1.2 + R + 0.4, c[1]); g.add(fin);
      // small corner domes
      const corners = [[bb[0] + 2.2, bb[1] + 2.2], [bb[2] - 2.2, bb[1] + 2.2], [bb[0] + 2.2, bb[3] - 2.2], [bb[2] - 2.2, bb[3] - 2.2]].filter(([x, z]) => pointInPoly(x, z, b.p));
      for (const [x, z] of corners) { const d = new THREE.Mesh(new THREE.SphereGeometry(1.2, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), this.mat.dome); d.position.set(x, h, z); g.add(d); }
      // minarets (two on the larger mosques)
      const mh = h + 8 + Math.min(10, span * 0.45); const spots = span > 18 ? [[bb[0] + 1.6, bb[1] + 1.6], [bb[2] - 1.6, bb[1] + 1.6]] : [[bb[0] + 1.6, bb[1] + 1.6]];
      for (const [mx, mz] of spots) {
        const min = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 1.05, mh, 12), this.mat.white); min.position.set(mx, mh / 2, mz); min.castShadow = true; g.add(min);
        for (const by of [0.55, 0.8]) { const bal = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.1, 0.5, 12), this.mat.dome); bal.position.set(mx, mh * by, mz); g.add(bal); }
        const cap = new THREE.Mesh(new THREE.SphereGeometry(1.2, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), this.mat.dome); cap.position.set(mx, mh, mz); g.add(cap);
        const mf = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.2, 6), this.mat.gold); mf.position.set(mx, mh + 1.6, mz); g.add(mf);
      }
      // arched entrance portico on the side nearest the road
      const nr = this.nearest(c[0], c[1]); const e = this.roadEdge(b, nr);
      if (e) { const pw = Math.min(10, e.L * 0.6); const por = new THREE.Mesh(new THREE.BoxGeometry(pw, Math.min(h, 5.5), 2.4), [LM.mosque, LM.mosque, this.mat.roofFlat, this.mat.roofFlat, LM.mosque, LM.mosque]); por.position.set(e.mx + e.nx * 1.3, Math.min(h, 5.5) / 2, e.mz + e.nz * 1.3); por.rotation.y = Math.atan2(e.nx, e.nz); por.castShadow = true; g.add(por); }
    } else if (isTemple) {
      for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(Math.max(0.6, 2.6 - k * 0.8), Math.max(1.0, 3.4 - k * 0.8), 2.2, 4), k === 2 ? this.mat.gold : this.mat.white); sp.position.set(c[0], h + 1.1 + k * 2.2, c[1]); sp.rotation.y = Math.PI / 4; sp.castShadow = true; g.add(sp); }
    } else if (isChurch) {
      const tw = new THREE.Mesh(new THREE.BoxGeometry(3.2, h + 5, 3.2), this.mat.white); tw.position.set(bb[0] + 2, (h + 5) / 2, bb[1] + 2); tw.castShadow = true; g.add(tw);
      const sp = new THREE.Mesh(new THREE.ConeGeometry(2.3, 4.5, 4), this.mat.roofFlat); sp.position.set(bb[0] + 2, h + 7.2, bb[1] + 2); sp.rotation.y = Math.PI / 4; g.add(sp);
    } else if (isMall) {
      // parapet band + entrance canopy + roof plant
      const nr = this.nearest(c[0], c[1]); const e = this.roadEdge(b, nr);
      if (e) { const can = new THREE.Mesh(new THREE.BoxGeometry(Math.min(16, e.L * 0.5), 0.5, 5), this.mat.navy); can.position.set(e.mx + e.nx * 2.5, 4.2, e.mz + e.nz * 2.5); can.rotation.y = Math.atan2(e.nx, e.nz); can.castShadow = true; g.add(can);
        for (const sx of [-1, 1]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 4, 8), this.mat.pole); const px = e.mx + e.nx * 4.6 + -e.nz * sx * Math.min(7, e.L * 0.22), pz = e.mz + e.nz * 4.6 + e.nx * sx * Math.min(7, e.L * 0.22); post.position.set(px, 2, pz); g.add(post); } }
      const plant = new THREE.Mesh(new THREE.BoxGeometry(Math.max(4, span * 0.25), 2, Math.max(4, span * 0.25)), this.mat.roofFlat); plant.position.set(c[0], h + 1, c[1]); g.add(plant);
    }
    // name board on the roof edge nearest the road
    if (b.name && !/^(yes|house|residential)$/i.test(b.name)) {
      const nr = this.nearest(c[0], c[1]); const e = this.roadEdge(b, nr);
      if (e) {
        const w = Math.min(isMall ? 22 : 16, Math.max(6, e.L * 0.8)); const hh = w * (isMall ? 0.14 : 0.16);
        const tex = this.nameTexture(b.name, isMosque ? '🕌' : isTemple ? '🛕' : isChurch ? '⛪' : isSchool ? '🏫' : isMall ? '🛍️' : isInstit ? '🏛️' : '');
        const board = new THREE.Mesh(new THREE.BoxGeometry(w, hh, 0.25), [this.mat.navy, this.mat.navy, this.mat.navy, this.mat.navy, tex, tex]);
        board.position.set(e.mx + e.nx * 0.3, h + hh / 2 + 0.4, e.mz + e.nz * 0.3); board.rotation.y = Math.atan2(e.nx, e.nz); g.add(board);
      }
    }
    return g;
  }
  // the polygon edge nearest the road, with its outward normal
  roadEdge(b, nr) {
    const c = b.c; let best = null, bd = Infinity;
    for (let i = 0; i < b.p.length; i++) { const a = b.p[i], q = b.p[(i + 1) % b.p.length]; const mx = (a[0] + q[0]) / 2, mz = (a[1] + q[1]) / 2; const L = Math.hypot(q[0] - a[0], q[1] - a[1]); if (L < 4) continue; const d = nr.px != null ? Math.hypot(mx - nr.px, mz - nr.pz) : 0; if (d < bd) { bd = d; best = { a, q, mx, mz, L }; } }
    if (!best) return null;
    const ex = best.q[0] - best.a[0], ez = best.q[1] - best.a[1]; let nx = -ez, nz = ex; const nl = Math.hypot(nx, nz) || 1; nx /= nl; nz /= nl;
    if ((best.mx - c[0]) * nx + (best.mz - c[1]) * nz < 0) { nx = -nx; nz = -nz; }
    best.nx = nx; best.nz = nz; return best;
  }
  nameTexture(name, icon) {
    const key = icon + name; if (this.signCache.has(key)) return this.signCache.get(key);
    const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 160; const x = cv.getContext('2d');
    x.fillStyle = '#17283C'; x.fillRect(0, 0, 1024, 160); x.fillStyle = '#D0B46C'; x.fillRect(0, 146, 1024, 14);
    x.fillStyle = '#ffffff'; x.textAlign = 'center'; x.textBaseline = 'middle';
    let size = 84; x.font = `900 ${size}px Poppins, "Segoe UI", Arial, sans-serif`;
    const txt = (icon ? icon + '  ' : '') + name.toUpperCase();
    while (x.measureText(txt).width > 960 && size > 34) { size -= 4; x.font = `900 ${size}px Poppins, "Segoe UI", Arial, sans-serif`; }
    x.fillText(txt, 512, 78);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    const m = new THREE.MeshStandardMaterial({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: this.style.nightNow ? 0.8 : 0, roughness: 0.6 });
    this.signCache.set(key, m); this.signMats.push(m);
    return m;
  }
  // petrol station canopies at fuel POIs
  buildFuel(p, g, obstacles) {
    const nr = this.nearest(p.c[0], p.c[1]); if (nr.d > 1e8) return;
    const h = nr.h;
    const grp = new THREE.Group(); grp.position.set(p.c[0], 0, p.c[1]); grp.rotation.y = h;
    const wp = (lx, lz) => [p.c[0] + lx * Math.cos(h) + lz * Math.sin(h), p.c[1] - lx * Math.sin(h) + lz * Math.cos(h)];
    const roof = new THREE.Mesh(new THREE.BoxGeometry(14, 0.6, 9), this.mat.white); roof.position.y = 4.8; roof.castShadow = true; grp.add(roof);
    const band = new THREE.Mesh(new THREE.BoxGeometry(14.2, 0.9, 9.2), this.mat.navy); band.position.y = 4.1; grp.add(band);
    for (const [px, pz] of [[-5, -3], [5, -3], [-5, 3], [5, 3]]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 4, 8), this.mat.white); post.position.set(px, 2, pz); grp.add(post); const [ox, oz] = wp(px, pz); obstacles.push({ type: 'circle', x: ox, z: oz, r: 0.25 }); }
    for (const px of [-2.5, 2.5]) { const pump = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.7, 0.5), this.mat.gold); pump.position.set(px, 0.85, 0); grp.add(pump); const [ox, oz] = wp(px, 0); obstacles.push({ type: 'box', x: ox, z: oz, hw: 0.5, hl: 0.3, h }); }
    const sign = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 0.2), [this.mat.navy, this.mat.navy, this.mat.navy, this.mat.navy, this.nameTexture(p.name || 'Petrol', '⛽'), this.mat.navy]); sign.position.set(0, 5.9, 0); grp.add(sign);
    g.add(grp);
  }

  // ---------------------------------------------------------------- traffic along the road graph (drive on the left)
  spawnAgent(agent, nearX, nearZ) {
    // pick a road near the player (not too near), a random position along it
    for (let tries = 0; tries < 30; tries++) {
      const ri = Math.floor(Math.random() * this.roads.length); const r = this.roads[ri];
      if (r.t === 'service' || r.t === 'track' || r.len < 40) continue;
      const i = Math.floor(Math.random() * (r.n.length - 1)); const p = this.nodes[r.n[i]];
      const d = Math.hypot(p[0] - nearX, p[1] - nearZ); if (d < 60 || d > 350) continue;
      agent.r = ri; agent.i = i; agent.t = Math.random(); agent.dir = r.one ? 1 : (Math.random() < 0.5 ? 1 : -1); agent.speed = (ROAD_SPEED[r.t] || 10) * rand(0.8, 1.0);
      return true;
    }
    return false;
  }
  advanceAgent(agent, dt) {
    const r = this.roads[agent.r]; const N = this.nodes;
    let move = agent.speed * dt;
    while (move > 0) {
      const L = r.seg[agent.i]; const pos = agent.t * L; const remain = agent.dir > 0 ? L - pos : pos;
      if (move < remain) { agent.t += (agent.dir * move) / L; move = 0; break; }
      move -= remain;
      // reached a node: either continue to the next segment or turn onto another road
      const nodeIdx = agent.dir > 0 ? agent.i + 1 : agent.i; const ni = r.n[nodeIdx];
      const options = [];
      for (const [rj, k] of (this.nodeRoads.get(ni) || [])) {
        const rr = this.roads[rj]; if (rr.t === 'service' || rr.t === 'track') continue;
        if (k < rr.n.length - 1 && !(rj === agent.r && rr.one === 0 && k === agent.i && agent.dir < 0)) options.push([rj, k, 1]);
        if (k > 0 && !rr.one && !(rj === agent.r && k - 1 === agent.i && agent.dir > 0)) options.push([rj, k - 1, -1]);
      }
      const straight = options.filter(([rj]) => rj === agent.r);
      const pickFrom = Math.random() < 0.7 && straight.length ? straight : options;
      if (!pickFrom.length) { agent.dir = -agent.dir; break; }
      const [rj, k, dir] = pickFrom[Math.floor(Math.random() * pickFrom.length)];
      agent.r = rj; agent.i = k; agent.dir = dir; agent.t = dir > 0 ? 0 : 1; agent.speed = (ROAD_SPEED[rj === agent.r ? r.t : this.roads[rj].t] || 10) * rand(0.8, 1.0);
      return this.advanceAgent(agent, move / agent.speed);
    }
    const rr = this.roads[agent.r]; const a = N[rr.n[agent.i]], b = N[rr.n[agent.i + 1]];
    const ux = (b[0] - a[0]) / rr.seg[agent.i], uz = (b[1] - a[1]) / rr.seg[agent.i];
    const fx = ux * agent.dir, fz = uz * agent.dir; const lx = fz, lz = -fx;   // left of travel
    const off = rr.one ? (rr.w / 4) * (Math.random() < 0.5 ? 1 : -1) * 0 + rr.w / 4 : rr.w / 4;
    agent.x = a[0] + ux * agent.t * rr.seg[agent.i] + lx * off; agent.z = a[1] + uz * agent.t * rr.seg[agent.i] + lz * off;
    agent.h = Math.atan2(-fx, -fz);
  }

  startPose() {
    const [sx, sz] = this.style.start;
    // nearest proper street (search outward in rings; the mall itself is surrounded by car-park service roads)
    let n = null;
    for (let rad = 0; rad < 400 && !(n && n.d < 1e8); rad += 40) for (let a = 0; a < 6.3 && !(n && n.d < 1e8); a += 0.8) { const c = this.nearest(sx + Math.cos(a) * rad, sz + Math.sin(a) * rad, { skipMinor: true }); if (c.d < 1e8) n = c; }
    if (!n) n = this.nearest(sx, sz);
    // drive on the left of the centre line
    const lx = -Math.cos(n.h) * 0 + Math.cos(n.h), lz = -Math.sin(n.h); // right vector
    return { x: n.px - lx * n.w / 4, z: n.pz - lz * n.w / 4, h: n.h };
  }
  dispose() { for (const t of this.tiles.values()) this.disposeTile(t); this.tiles.clear(); this.scene.remove(this.group); }
}

// ---------------------------------------------------------------- geometry helpers
function ribbon(pts, offA, offB, y, vScale, yB = y) {
  const n = pts.length; const pos = new Float32Array(n * 6), uv = new Float32Array(n * 4); const idx = [];
  let s = 0;
  for (let k = 0; k < n; k++) {
    const p = pts[k]; const prev = pts[Math.max(0, k - 1)], next = pts[Math.min(n - 1, k + 1)];
    let d0x = p[0] - prev[0], d0z = p[1] - prev[1], d1x = next[0] - p[0], d1z = next[1] - p[1];
    const l0 = Math.hypot(d0x, d0z) || 1, l1 = Math.hypot(d1x, d1z) || 1; d0x /= l0; d0z /= l0; d1x /= l1; d1z /= l1;
    if (k === 0) { d0x = d1x; d0z = d1z; } if (k === n - 1) { d1x = d0x; d1z = d0z; }
    // miter normal (clamped so sharp corners don't explode)
    let nx = -(d0z + d1z), nz = (d0x + d1x); const nl = Math.hypot(nx, nz) || 1; nx /= nl; nz /= nl;
    const cosHalf = Math.max(0.5, nx * -d1z + nz * d1x); const sc = 1 / cosHalf;
    pos.set([p[0] + nx * offA * sc, y, p[1] + nz * offA * sc, p[0] + nx * offB * sc, yB, p[1] + nz * offB * sc], k * 6);
    if (k > 0) s += Math.hypot(p[0] - prev[0], p[1] - prev[1]);
    uv.set([0, s * vScale, 1, s * vScale], k * 4);
    if (k < n - 1) { const a = k * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  // make sure the strip faces up regardless of the direction the way was drawn in
  const nrm = g.attributes.normal; if (nrm.getY(0) < 0) { const ia = g.index.array; for (let i = 0; i < ia.length; i += 3) { const t = ia[i + 1]; ia[i + 1] = ia[i + 2]; ia[i + 2] = t; } g.computeVertexNormals(); }
  return g;
}
function mergeGeos(geos) {
  let nv = 0, ni = 0; for (const g of geos) { nv += g.attributes.position.count; ni += g.index.count; }
  const pos = new Float32Array(nv * 3), uv = new Float32Array(nv * 2), nrm = new Float32Array(nv * 3), idx = new Uint32Array(ni);
  let vo = 0, io = 0;
  for (const g of geos) {
    pos.set(g.attributes.position.array, vo * 3); if (g.attributes.uv) uv.set(g.attributes.uv.array, vo * 2); nrm.set(g.attributes.normal.array, vo * 3);
    const ia = g.index.array; for (let i = 0; i < ia.length; i++) idx[io + i] = ia[i] + vo;
    vo += g.attributes.position.count; io += ia.length; g.dispose();
  }
  const m = new THREE.BufferGeometry();
  m.setAttribute('position', new THREE.BufferAttribute(pos, 3)); m.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); m.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  m.setIndex(new THREE.BufferAttribute(idx, 1)); return m;
}
function polyArea(pts) { let a = 0; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) a += (pts[j][0] + pts[i][0]) * (pts[j][1] - pts[i][1]); return Math.abs(a / 2); }
function centroid(pts) { let x = 0, z = 0; for (const p of pts) { x += p[0]; z += p[1]; } return [x / pts.length, z / pts.length]; }
function bboxOf(pts) { let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity; for (const p of pts) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); z0 = Math.min(z0, p[1]); z1 = Math.max(z1, p[1]); } return [x0, z0, x1, z1]; }
function pointInPoly(x, z, pts) { let inside = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const a = pts[i], b = pts[j]; if ((a[1] > z) !== (b[1] > z) && x < ((b[0] - a[0]) * (z - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside; } return inside; }
// oriented box roughly matching a polygon: use the direction of its longest edge
function obbOf(pts) {
  let best = 0, bl = -1;
  for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; const l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (l > bl) { bl = l; best = Math.atan2(b[1] - a[1], b[0] - a[0]); } }
  const c = Math.cos(-best), s = Math.sin(-best); let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (const p of pts) { const x = p[0] * c - p[1] * s, z = p[0] * s + p[1] * c; x0 = Math.min(x0, x); x1 = Math.max(x1, x); z0 = Math.min(z0, z); z1 = Math.max(z1, z); }
  const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  // back to world
  const wx = cx * Math.cos(best) - cz * Math.sin(best), wz = cx * Math.sin(best) + cz * Math.cos(best);
  // collideBox expects heading h with right=(cos h, -sin h): a box whose long edge runs at angle `best` (x right, z down) has h = -best
  return { x: wx, z: wz, hw: (x1 - x0) / 2, hl: (z1 - z0) / 2, h: -best };
}
