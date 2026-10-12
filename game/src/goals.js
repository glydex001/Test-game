// Things to do: stars to collect, missions with a target arrow, a sticker book, and saved progress.
import * as THREE from 'three';

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ------------------------------------------------------------------ progress (saved)
const PKEY = 'kidcars-progress-v1';
export const P = { stars: 0, missions: 0, deliveries: 0, km: 0, bestKmh: 0, boosts: 0, horns: 0, worlds: {}, cars: {}, nightKm: 0, photos: 0, duas: 0, masjids: 0, goodStops: 0, pads: 0, stickers: {} };
try { Object.assign(P, JSON.parse(localStorage.getItem(PKEY) || '{}')); } catch (e) { /* ignore */ }
export function saveP() { try { localStorage.setItem(PKEY, JSON.stringify(P)); } catch (e) { /* ignore */ } }

export const STICKERS = [
  { id: 'star1', e: '⭐', n: 'First Star', ok: () => P.stars >= 1 },
  { id: 'star50', e: '🌟', n: 'Star Collector', ok: () => P.stars >= 50 },
  { id: 'star200', e: '✨', n: 'Star Hunter', ok: () => P.stars >= 200 },
  { id: 'star500', e: '💫', n: 'Star Master', ok: () => P.stars >= 500 },
  { id: 'star1000', e: '🌠', n: 'Star Legend', ok: () => P.stars >= 1000 },
  { id: 'm1', e: '🎯', n: 'First Mission', ok: () => P.missions >= 1 },
  { id: 'm5', e: '🏅', n: 'Five Missions', ok: () => P.missions >= 5 },
  { id: 'm20', e: '🏆', n: 'Mission Champ', ok: () => P.missions >= 20 },
  { id: 'km5', e: '🛣️', n: '5 km Driven', ok: () => P.km >= 5 },
  { id: 'km25', e: '🗺️', n: '25 km Driven', ok: () => P.km >= 25 },
  { id: 'km100', e: '🌍', n: '100 km Driven', ok: () => P.km >= 100 },
  { id: 'sp100', e: '💨', n: '100 km/h', ok: () => P.bestKmh >= 100 },
  { id: 'sp200', e: '🚀', n: '200 km/h', ok: () => P.bestKmh >= 200 },
  { id: 'sp300', e: '⚡', n: '300 km/h', ok: () => P.bestKmh >= 300 },
  { id: 'wc', e: '🌳', n: 'Country Driver', ok: () => (P.worlds.country || 0) >= 1 },
  { id: 'wd', e: '🌵', n: 'Desert Driver', ok: () => (P.worlds.desert || 0) >= 1 },
  { id: 'wci', e: '🏙️', n: 'City Driver', ok: () => (P.worlds.city || 0) >= 1 },
  { id: 'ws', e: '⛄', n: 'Snow Driver', ok: () => (P.worlds.snow || 0) >= 1 },
  { id: 'wl', e: '🏘️', n: 'Lenasia Driver', ok: () => (P.worlds.lenasia || 0) >= 1 },
  { id: 'night', e: '🌙', n: 'Night Owl', ok: () => P.nightKm >= 1 },
  { id: 'd1', e: '🛋️', n: 'Recliner Delivered', ok: () => P.deliveries >= 1 },
  { id: 'd10', e: '🚚', n: 'Delivery Pro', ok: () => P.deliveries >= 10 },
  { id: 'cars', e: '🚗', n: 'Drove Every Car', ok: () => Object.keys(P.cars).length >= 14 },
  { id: 'fast', e: '🏎️', n: 'Speed Demon', ok: () => P.bestKmh >= 400 },
  { id: 'horn', e: '📣', n: 'Beep Beep', ok: () => P.horns >= 20 },
  { id: 'photo', e: '📸', n: 'Photographer', ok: () => P.photos >= 1 },
  { id: 'dua', e: '🤲', n: 'Bismillah', ok: () => (P.duas || 0) >= 5 },
  { id: 'masjid', e: '🕌', n: 'Masjid Visitor', ok: () => (P.masjids || 0) >= 10 },
  { id: 'stop', e: '🚦', n: 'Good Driver', ok: () => (P.goodStops || 0) >= 5 },
  { id: 'pad', e: '⚡', n: 'Zoom Zoom', ok: () => (P.pads || 0) >= 10 },
  { id: 'jump', e: '🪽', n: 'High Flyer', ok: () => (P.jumps || 0) >= 5 },
  { id: 'dash', e: '⏱️', n: 'Dash Champion', ok: () => (P.dashes || 0) >= 3 },
  { id: 'snap', e: '🖼️', n: 'Snap Happy', ok: () => (P.photoMissions || 0) >= 3 },
];
// returns stickers that have just been earned (and remembers them)
export function newStickers() { const out = []; for (const s of STICKERS) if (!P.stickers[s.id] && s.ok()) { P.stickers[s.id] = 1; out.push(s); } if (out.length) saveP(); return out; }

// ------------------------------------------------------------------ stars (one instanced mesh for the whole world)
const MAX = 400;
let mesh = null; const stars = [];   // {x, z, g (group key), alive, ph}
const _m = new THREE.Matrix4(), _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(1, 1, 1), _e = new THREE.Euler();
export function initStars(scene) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const r = i % 2 ? 0.3 : 0.7; const a = (i / 10) * Math.PI * 2 - Math.PI / 2; const x = Math.cos(a) * r, y = Math.sin(a) * r; if (i) shape.lineTo(x, y); else shape.moveTo(x, y); }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.16, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 2 }); geo.center();
  const mat = new THREE.MeshStandardMaterial({ color: 0xffc83c, emissive: 0xff9a00, emissiveIntensity: 0.8, roughness: 0.3, metalness: 0.4 });
  mesh = new THREE.InstancedMesh(geo, mat, MAX); mesh.frustumCulled = false; mesh.count = 0; scene.add(mesh);
  return mesh;
}
export function addStar(x, z, group) { if (stars.length >= MAX) return; stars.push({ x, z, g: group, alive: true, ph: Math.random() * 6.28 }); }
export function addStarLine(x, z, dx, dz, n, group) { for (let k = 0; k < n; k++) addStar(x + dx * k, z + dz * k, group); }
export function removeStars(group) { for (let i = stars.length - 1; i >= 0; i--) if (stars[i].g === group) stars.splice(i, 1); }
export function clearStars() { stars.length = 0; if (mesh) mesh.count = 0; }
export function starCount() { return stars.filter((s) => s.alive).length; }
let spin = 0;
// pts: points of the car to test against (centre + front). Returns number collected this frame.
export function updateStars(dt, pts, onCollect) {
  if (!mesh) return 0;
  spin += dt * 2.2; let k = 0, got = 0;
  for (const s of stars) {
    if (!s.alive) continue;
    let near = false;
    for (const [px, pz] of pts) { const dx = s.x - px, dz = s.z - pz; if (dx * dx + dz * dz < 2.3 * 2.3) { near = true; break; } }
    if (near) { s.alive = false; got++; if (onCollect) onCollect(s.x, s.z); continue; }
    _p.set(s.x, 1.05 + Math.sin(spin * 1.4 + s.ph) * 0.14, s.z); _e.set(0, spin + s.ph, 0); _q.setFromEuler(_e); _m.compose(_p, _q, _s); mesh.setMatrixAt(k++, _m);
  }
  mesh.count = k; mesh.instanceMatrix.needsUpdate = true;
  return got;
}

// ------------------------------------------------------------------ target marker (beam of light + ring)
export function makeTargetMarker(scene) {
  const g = new THREE.Group();
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xffd54a, transparent: true, opacity: 0.32, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false });
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.2, 60, 16, 1, true), beamMat); beam.position.y = 30; g.add(beam);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.25, 8, 32), new THREE.MeshStandardMaterial({ color: 0xffd54a, emissive: 0xffb000, emissiveIntensity: 1.2, roughness: 0.3 })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.4; g.add(ring);
  g.visible = false; scene.add(g);
  g.userData.tick = (dt, t) => { ring.position.y = 0.5 + Math.sin(t * 2.5) * 0.3; ring.rotation.z += dt; beamMat.opacity = 0.26 + Math.sin(t * 3) * 0.08; };
  return g;
}

// ------------------------------------------------------------------ a Glyde-X recliner to carry on the roof
export function makeRecliner() {
  const g = new THREE.Group();
  const leather = new THREE.MeshStandardMaterial({ color: 0x5a3b26, roughness: 0.55, metalness: 0.05 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x2b1d14, roughness: 0.7 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xd0b46c, roughness: 0.35, metalness: 0.7 });
  const box = (w, h, d, m, x, y, z, rx = 0) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); b.position.set(x, y, z); b.rotation.x = rx; b.castShadow = true; g.add(b); return b; };
  box(0.95, 0.12, 0.9, dark, 0, 0.06, 0);                 // base
  box(0.8, 0.3, 0.8, leather, 0, 0.3, 0.05);              // seat cushion
  box(0.8, 0.85, 0.28, leather, 0, 0.78, -0.42, -0.22);   // back, reclined a little
  box(0.2, 0.42, 0.85, leather, -0.45, 0.42, 0);          // arms
  box(0.2, 0.42, 0.85, leather, 0.45, 0.42, 0);
  box(0.7, 0.14, 0.42, leather, 0, 0.36, 0.62, 0.35);     // footrest up
  box(0.5, 0.06, 0.06, gold, 0, 1.18, -0.5);              // gold trim on the headrest
  g.scale.setScalar(0.85);
  return g;
}

// ------------------------------------------------------------------ guide arrows (float along the road route to the target)
const GMAX = 26; let gmesh = null; const gm = new THREE.Matrix4(), gp = new THREE.Vector3(), gq = new THREE.Quaternion(), gs = new THREE.Vector3(), ge = new THREE.Euler();
export function initGuide(scene) {
  const sh = new THREE.Shape(); sh.moveTo(0, 0.9); sh.lineTo(0.75, -0.1); sh.lineTo(0.3, -0.1); sh.lineTo(0.3, -0.9); sh.lineTo(-0.3, -0.9); sh.lineTo(-0.3, -0.1); sh.lineTo(-0.75, -0.1); sh.closePath();
  const geo = new THREE.ExtrudeGeometry(sh, { depth: 0.14, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 1 }); geo.rotateX(-Math.PI / 2); geo.rotateY(Math.PI); geo.scale(2.0, 1.6, 2.0);
  const mat = new THREE.MeshStandardMaterial({ color: 0xffd54a, emissive: 0xffa000, emissiveIntensity: 0.7, roughness: 0.35, metalness: 0.3, transparent: true, opacity: 0.95 });
  gmesh = new THREE.InstancedMesh(geo, mat, GMAX); gmesh.frustumCulled = false; gmesh.count = 0; scene.add(gmesh);
  return gmesh;
}
// distance from (x,z) to the route polyline, and the point `ahead` metres further along it
export function routeInfo(route, x, z, ahead) {
  if (!route || route.length < 2) return null;
  let best = { d: Infinity, i: 0, t: 0 };
  for (let i = 0; i < route.length - 1; i++) { const a = route[i], b = route[i + 1]; const ex = b[0] - a[0], ez = b[1] - a[1]; const L2 = ex * ex + ez * ez || 1; let t = ((x - a[0]) * ex + (z - a[1]) * ez) / L2; t = Math.max(0, Math.min(1, t)); const d = Math.hypot(x - a[0] - ex * t, z - a[1] - ez * t); if (d < best.d) best = { d, i, t }; }
  let i = best.i; const a = route[i], b = route[i + 1]; let left = ahead; let px = a[0] + (b[0] - a[0]) * best.t, pz = a[1] + (b[1] - a[1]) * best.t;
  while (i < route.length - 1) { const q = route[i + 1]; const L = Math.hypot(q[0] - px, q[1] - pz); if (L >= left) { px += (q[0] - px) * left / (L || 1); pz += (q[1] - pz) * left / (L || 1); left = 0; break; } left -= L; px = q[0]; pz = q[1]; i++; }
  return { d: best.d, x: px, z: pz };
}
export function updateGuide(route, x, z, t) {
  if (!gmesh) return;
  if (!route || route.length < 2) { gmesh.count = 0; return; }
  let n = 0; const skip = 7, step = 9;
  // resample the route from the player's nearest point, then place an arrow every `step` metres
  const pts = []; { let best = { d: Infinity, i: 0, t: 0 }; for (let k = 0; k < route.length - 1; k++) { const a = route[k], b = route[k + 1]; const ex = b[0] - a[0], ez = b[1] - a[1]; const L2 = ex * ex + ez * ez || 1; let tt = ((x - a[0]) * ex + (z - a[1]) * ez) / L2; tt = Math.max(0, Math.min(1, tt)); const d = Math.hypot(x - a[0] - ex * tt, z - a[1] - ez * tt); if (d < best.d) best = { d, i: k, t: tt }; } const a = route[best.i], b = route[best.i + 1]; pts.push([a[0] + (b[0] - a[0]) * best.t, a[1] + (b[1] - a[1]) * best.t]); for (let k = best.i + 1; k < route.length; k++) pts.push(route[k]); }
  let acc = 0, next = skip;
  for (let k = 0; k < pts.length - 1 && n < GMAX; k++) {
    const a = pts[k], b = pts[k + 1]; const L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (L < 0.01) continue; const ux = (b[0] - a[0]) / L, uz = (b[1] - a[1]) / L; const yaw = Math.atan2(-ux, -uz);
    while (next <= acc + L && n < GMAX) { const d = next - acc; gp.set(a[0] + ux * d, 0.75 + Math.sin(t * 4 + n * 0.9) * 0.12, a[1] + uz * d); ge.set(0, yaw, 0); gq.setFromEuler(ge); const sc = 1 + Math.sin(t * 4 + n * 0.9) * 0.08; gs.set(sc, 1, sc); gm.compose(gp, gq, gs); gmesh.setMatrixAt(n++, gm); next += step; }
    acc += L;
  }
  gmesh.count = n; gmesh.instanceMatrix.needsUpdate = true;
}

// ------------------------------------------------------------------ missions
const POI_ICON = (p) => {
  const n = (p.name || '').toLowerCase(), k = p.k;
  if (/masjid|mosque|islam|sufi|jumma/.test(n) || k === 'mosque') return '🕌';
  if (/temple|koil|mandir|sai centre|hindu/.test(n)) return '🛕';
  if (/church|catholic|chapel|kingdom hall/.test(n) || k === 'place_of_worship') return '⛪';
  return { mall: '🛍️', school: '🏫', park: '🌳', supermarket: '🛒', hospital: '🏥', clinic: '🏥', library: '📚', police: '🚓', fuel: '⛽', sports_centre: '⚽', community_centre: '🏛️', childcare: '🧸', retail: '🏪', commercial: '🏪', chemist: '💊', butcher: '🥩', stationery: '✏️' }[k] || '📍';
};
const SKIP_POI = /cemetery|parking|residential/;

export class Missions {
  constructor() { this.cur = null; this.seq = 0; this.ownStars = 0; }
  // ctx: { isMap, road (OsmWorld|ProceduralRoad), x, z, maxKmh, traffic, showroomAt }
  next(ctx) {
    const seq = this.seq++;
    const generic = [
      () => ({ kind: 'stars', icon: '⭐', text: `Collect ${10 + 5 * (seq % 3)} stars`, need: 10 + 5 * (seq % 3), have: 0, reward: 20 }),
      () => ({ kind: 'km', icon: '🛣️', text: `Drive ${seq > 6 ? 2 : 1} km`, need: (seq > 6 ? 2 : 1) * 1000, have: 0, reward: 20, unit: 'km' }),
      () => { const v = Math.round((ctx.maxKmh * (0.5 + Math.min(0.3, seq * 0.03))) / 10) * 10; return { kind: 'speed', icon: '💨', text: `Reach ${v} km/h`, need: v, have: 0, reward: 20, unit: 'kmh' }; },
      () => ({ kind: 'clean', icon: '🛡️', text: 'Drive 600 m with no bumps', need: 600, have: 0, reward: 25, unit: 'm' }),
      () => ({ kind: 'boost', icon: '⚡', text: 'Use boost 3 times', need: 3, have: 0, reward: 15 }),
      () => ({ kind: 'horn', icon: '📣', text: 'Honk the horn 5 times', need: 5, have: 0, reward: 10 }),
    ];
    if (ctx.traffic && !ctx.isMap) generic.push(() => ({ kind: 'pass', icon: '🚗', text: `Pass ${3 + (seq % 2) * 2} cars`, need: 3 + (seq % 2) * 2, have: 0, reward: 25 }));
    let m = null;
    if (ctx.isMap) {
      // a short trip, a recliner delivery, a photo stop, a star street, a timed dash, then something generic — all close by
      const cycle = seq % 6;
      if (cycle === 0) m = this.gotoMission(ctx);
      else if (cycle === 1) m = this.deliverMission(ctx);
      else if (cycle === 2) m = this.photoMission(ctx);
      else if (cycle === 3) m = this.starStreetMission(ctx);
      else if (cycle === 4) m = this.gotoMission(ctx, true);
      if (!m && seq % 12 === 11 && ctx.showroomAt) { const t = this.snap(ctx.road, ctx.showroomAt[0], ctx.showroomAt[1], true); const d = t ? Math.hypot(t[0] - ctx.x, t[1] - ctx.z) : 0; if (t && d > 300 && d < 9000) m = { kind: 'goto', icon: '🛋️', text: 'Big trip: drive to Glyde-X Recliners', target: [t[0], t[1]], poi: ctx.showroomAt, need: 1, have: 0, reward: 80 }; }
      if (!m) m = pick(generic)();
    } else m = generic[seq % generic.length]();
    m.phase = 0; this.cur = m; this.ownStars = 0;
    return m;
  }
  // snap a point to the nearest proper road so the target is reachable by car
  snap(road, x, z, any) { let n = road.nearest(x, z, { skipMinor: true }); if (any && (!n || n.d > 60)) n = road.nearest(x, z); if (!n || n.d > 1e8 || n.d > 90) return null; return [n.px, n.pz, n.name]; }
  // a named place nearby (a mosque, a shop, a school, a park…), snapped to the road in front of it
  nearPoi(ctx, minD, maxD) {
    const pois = ctx.road.data.pois.filter((p) => p.name && !SKIP_POI.test(p.k) && p.name.length < 34);
    const cand = pois.map((p) => ({ p, d: Math.hypot(p.c[0] - ctx.x, p.c[1] - ctx.z) })).filter((c) => c.d > minD && c.d < maxD);
    for (let tries = 0; tries < 12 && cand.length; tries++) { const c = pick(cand); const t = this.snap(ctx.road, c.p.c[0], c.p.c[1]); if (t) return { p: c.p, t, d: c.d }; }
    return null;
  }
  gotoMission(ctx, dash) {
    const c = this.nearPoi(ctx, 150, dash ? 500 : 650); if (!c) return null;
    const m = { kind: 'goto', icon: POI_ICON(c.p), text: `Drive to ${c.p.name}`, target: [c.t[0], c.t[1]], poi: c.p.c, need: 1, have: 0, reward: 25 };
    if (dash) { m.text = `Dash to ${c.p.name}!`; m.timer = Math.round(Math.max(30, c.d / 6)); m.timeLimit = m.timer; m.reward = 50; m.icon = '⏱️'; }
    return m;
  }
  // stop at a place and take a photo
  photoMission(ctx) {
    const c = this.nearPoi(ctx, 150, 600); if (!c) return null;
    return { kind: 'photo', icon: '📸', text: `Take a photo at ${c.p.name}`, target: [c.t[0], c.t[1]], poi: c.p.c, need: 1, have: 0, reward: 30 };
  }
  // a line of stars placed along a nearby named street
  starStreetMission(ctx) {
    const N = ctx.road.nodes; const cands = [];
    for (const r of ctx.road.roads) {
      if (!r.name || !/residential|tertiary|secondary|unclassified/.test(r.t) || r.len < 120) continue;
      const p = N[r.n[Math.floor(r.n.length / 2)]]; const d = Math.hypot(p[0] - ctx.x, p[1] - ctx.z); if (d < 150 || d > 600) continue;
      cands.push({ r, p, d });
    }
    if (!cands.length) return null;
    const { r, p } = pick(cands);
    // stars every 6 m along the middle 60 m of the street, in the left lane of travel
    const pts = r.n.map((i) => N[i]); let total = 0; for (const L of r.seg) total += L; let want = total / 2 - 30, acc = 0; const stars = [];
    for (let i = 0; i < pts.length - 1 && stars.length < 10; i++) { const a = pts[i], b = pts[i + 1], L = r.seg[i]; const ux = (b[0] - a[0]) / L, uz = (b[1] - a[1]) / L; while (want < acc + L && stars.length < 10) { if (want >= acc) { const t = want - acc; stars.push([a[0] + ux * t - uz * r.w / 4, a[1] + uz * t + ux * r.w / 4]); } want += 6; } acc += L; }
    if (stars.length < 5) return null;
    for (const q of stars) addStar(q[0], q[1], 'mission');
    return { kind: 'stars', icon: '⭐', text: `Collect ${stars.length} stars on ${r.name}`, target: [stars[Math.floor(stars.length / 2)][0], stars[Math.floor(stars.length / 2)][1]], need: stars.length, have: 0, reward: 30, placed: true };
  }
  deliverMission(ctx) {
    if (!ctx.showroomAt) return null;
    // pick up at the showroom if it is close, otherwise from a Glyde-X delivery van parked at a place nearby
    let pickup = null, van = false, where = '';
    const sd = Math.hypot(ctx.showroomAt[0] - ctx.x, ctx.showroomAt[1] - ctx.z);
    if (sd < 900) pickup = this.snap(ctx.road, ctx.showroomAt[0], ctx.showroomAt[1], true);
    if (!pickup) { const c = this.nearPoi(ctx, 120, 500); if (!c) return null; pickup = c.t; van = true; where = c.p.name; }
    // a named residential street 300–900 m from the showroom
    const N = ctx.road.nodes; const cands = [];
    for (const r of ctx.road.roads) {
      if (!r.name || !/residential|living_street|unclassified/.test(r.t) || r.len < 80) continue;
      const p = N[r.n[Math.floor(r.n.length / 2)]]; const d = Math.hypot(p[0] - pickup[0], p[1] - pickup[1]); if (d < 200 || d > (van ? 600 : 3200)) continue;
      cands.push({ r, p });
    }
    if (!cands.length) return null;
    cands.sort((a, b) => Math.hypot(a.p[0] - pickup[0], a.p[1] - pickup[1]) - Math.hypot(b.p[0] - pickup[0], b.p[1] - pickup[1]));
    const { r, p } = pick(cands.slice(0, Math.max(6, Math.ceil(cands.length / 4))));   // the nearer streets
    return { kind: 'deliver', icon: '🛋️', text: van ? `Fetch a recliner from the Glyde-X van at ${where}` : 'Pick up a recliner at Glyde-X', text2: `Deliver it to a house on ${r.name}`, target: [pickup[0], pickup[1]], target2: [p[0], p[1]], need: 2, have: 0, reward: 40, van };
  }
  // game events: 'star', 'dist' (metres this frame), 'speed' (km/h), 'pass', 'boost', 'horn', 'hit', 'pos' ([x,z])
  event(type, v) {
    const m = this.cur; if (!m || m.done) return false;
    switch (m.kind) {
      case 'stars': if (type === 'star') m.have++; break;
      case 'km': if (type === 'dist') m.have += v; break;
      case 'speed': if (type === 'speed') m.have = Math.max(m.have, v); break;
      case 'clean': if (type === 'dist') m.have += v; if (type === 'hit') m.have = 0; break;
      case 'boost': if (type === 'boost') m.have++; break;
      case 'horn': if (type === 'horn') m.have++; break;
      case 'pass': if (type === 'pass') m.have++; break;
      case 'goto': if (type === 'pos' && (Math.hypot(v[0] - m.target[0], v[1] - m.target[1]) < 22 || Math.hypot(v[0] - m.poi[0], v[1] - m.poi[1]) < 45)) m.have = 1; break;
      case 'photo': if (type === 'photo' && (Math.hypot(v[0] - m.target[0], v[1] - m.target[1]) < 40 || Math.hypot(v[0] - m.poi[0], v[1] - m.poi[1]) < 60)) m.have = 1; break;
      case 'deliver':
        if (type === 'pos') {
          const t = m.phase === 0 ? m.target : m.target2;
          if (Math.hypot(v[0] - t[0], v[1] - t[1]) < 22) { if (m.phase === 0) { m.phase = 1; m.have = 1; return 'pickup'; } m.have = 2; }
        }
        break;
    }
    if (m.have >= m.need) { m.done = true; return 'done'; }
    return false;
  }
  target() { const m = this.cur; if (!m || m.done) return null; if (m.kind === 'goto' || m.kind === 'photo' || (m.kind === 'stars' && m.placed && m.have === 0)) return m.target; if (m.kind === 'deliver') return m.phase === 0 ? m.target : m.target2; return null; }
  // timed dash: counts down; when it runs out the mission carries on as an ordinary trip
  tick(dt) { const m = this.cur; if (!m || m.done || m.timer == null) return null; m.timer -= dt; if (m.timer <= 0) { m.timer = null; m.reward = 25; m.text = m.text.replace(/^Dash to (.*)!$/, 'Drive to $1'); m.icon = '📍'; return 'timeout'; } return null; }
  label() {
    const m = this.cur; if (!m) return { icon: '', text: '', prog: '' };
    const text = m.kind === 'deliver' && m.phase === 1 ? m.text2 : m.text;
    let prog = '';
    if (m.unit === 'km') prog = `${(Math.min(m.have, m.need) / 1000).toFixed(1)} / ${(m.need / 1000).toFixed(0)} km`;
    else if (m.unit === 'm') prog = `${Math.min(m.have, m.need).toFixed(0)} / ${m.need} m`;
    else if (m.unit === 'kmh') prog = `${Math.round(m.have)} / ${m.need}`;
    else if (m.timer != null) prog = `${Math.floor(m.timer / 60)}:${String(Math.ceil(m.timer % 60)).padStart(2, '0')}`;
    else if (m.kind === 'goto' || m.kind === 'deliver' || m.kind === 'photo') prog = '';
    else prog = `${m.have} / ${m.need}`;
    return { icon: m.icon, text, prog };
  }
}
