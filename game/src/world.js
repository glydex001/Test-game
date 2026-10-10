// Environments: road, ground, scenery, backdrops, billboards, buildings, sky, lighting.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { bendMat } from './bend.js';

export const ROAD_W = 13.5;              // 3 lanes
export const LANES = [-4.3, 0, 4.3];
export const EDGE = ROAD_W / 2 - 1.25;
export const RANGE = 520;                // how far ahead the scrolling world exists

const rand = (a, b) => a + Math.random() * (b - a);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const texLoader = new THREE.TextureLoader();
const texCache = {};
export function tex(name, { repeat = 1, mirror = true, srgb = true } = {}) {
  if (texCache[name]) return texCache[name];
  const t = texLoader.load(`tex/${name}.webp`);
  t.wrapS = t.wrapT = mirror ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  texCache[name] = t;
  return t;
}
const std = (opts) => bendMat(new THREE.MeshStandardMaterial(opts));

// ------------------------------------------------------------ scrolling helpers
export class Repeater {
  constructor(world, spacing, build, start = 50) {
    this.spacing = spacing;
    this.group = new THREE.Group();
    const n = Math.ceil((RANGE + 80) / spacing);
    for (let i = 0; i < n; i++) { const o = build(i); o.position.z = start - i * spacing; this.group.add(o); }
    world.add(this.group);
  }
  update(scroll) { this.group.position.z = scroll % this.spacing; }
  setVisible(v) { this.group.visible = v; }
}

export class Scatter {
  constructor(world, parts, count, xmin, xmax, scaleRange, opts = {}) {
    this.count = count; this.parts = []; this.opts = opts;
    this.x = new Float32Array(count); this.z = new Float32Array(count);
    this.s = new Float32Array(count); this.r = new Float32Array(count); this.v = new Uint8Array(count);
    this.xmin = xmin; this.xmax = xmax; this.scaleRange = scaleRange;
    for (const p of parts) {
      const im = new THREE.InstancedMesh(p.geometry, p.material, count);
      im.castShadow = !!p.shadow; im.receiveShadow = false; im.frustumCulled = false;
      this.parts.push({ im, p }); world.add(im);
    }
    for (let i = 0; i < count; i++) { this.respawn(i); this.z[i] = rand(-RANGE, 40); }
    this.dummy = new THREE.Object3D();
    this.write();
  }
  respawn(i) {
    const side = Math.random() < 0.5 ? -1 : 1;
    this.x[i] = side * rand(this.xmin, this.xmax);
    this.z[i] = -RANGE + rand(0, 40);
    this.s[i] = rand(this.scaleRange[0], this.scaleRange[1]);
    this.r[i] = this.opts.billboard ? (Math.random() < 0.5 ? 0 : 0.5) : rand(0, Math.PI * 2);
    this.v[i] = Math.floor(Math.random() * 1000);
  }
  write() {
    for (const { im, p } of this.parts) {
      for (let i = 0; i < this.count; i++) {
        const s = this.s[i] * (p.scale || 1);
        this.dummy.position.set(this.x[i] + (p.dx || 0) * s, (p.y || 0) * s, this.z[i]);
        this.dummy.rotation.set(0, this.r[i] + (p.rotY || 0), 0);
        this.dummy.scale.set(s * (p.sx || 1), s * (p.sy || 1), s * (p.sz || 1));
        this.dummy.updateMatrix();
        im.setMatrixAt(i, this.dummy.matrix);
      }
      im.instanceMatrix.needsUpdate = true;
    }
  }
  update(dz) {
    for (let i = 0; i < this.count; i++) { this.z[i] += dz; if (this.z[i] > 45) this.respawn(i); }
    this.write();
  }
  setVisible(v) { for (const { im } of this.parts) im.visible = v; }
}

// A tree/cactus "billboard": two crossed textured planes (looks fine from every driving angle)
function cutoutParts(name, height, aspect, opts = {}) {
  const t = tex(name, { mirror: false });
  const w = height * aspect;
  const geo = new THREE.PlaneGeometry(w, height);
  geo.translate(0, height / 2 - (opts.sink || 0), 0);
  const mat = std({ map: t, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 1, metalness: 0, color: opts.tint || 0xffffff });
  const cross = new THREE.PlaneGeometry(w, height); cross.translate(0, height / 2 - (opts.sink || 0), 0); cross.rotateY(Math.PI / 2);
  return [{ geometry: geo, material: mat }, { geometry: cross, material: mat }];
}

// ------------------------------------------------------------ world
export function createWorld(scene, renderer) {
  const world = new THREE.Group(); scene.add(world);
  const W = { group: world, worlds: {}, current: null };

  // sky + sun
  const sky = new Sky(); sky.scale.setScalar(20000); scene.add(sky);
  const sun = new THREE.DirectionalLight(0xffffff, 2.2);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -20; sun.shadow.camera.right = 20; sun.shadow.camera.top = 30; sun.shadow.camera.bottom = -30;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 150; sun.shadow.bias = -0.0008; sun.shadow.normalBias = 0.02;
  scene.add(sun); scene.add(sun.target);
  const hemi = new THREE.HemisphereLight(0xbfdfff, 0x4a6a2a, 0.5); scene.add(hemi);
  const pmrem = new THREE.PMREMGenerator(renderer);
  W.sky = sky; W.sun = sun; W.hemi = hemi;

  // ground + road
  const asphalt = tex('asphalt'); asphalt.repeat.set(2, (RANGE + 60) / 7);
  const roadMat = std({ map: asphalt, roughness: 0.92, metalness: 0.0 });
  const road = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_W, RANGE + 60, 1, 96), roadMat);
  road.rotation.x = -Math.PI / 2; road.position.set(0, 0.02, -RANGE / 2 + 40); road.receiveShadow = true; world.add(road);
  const groundMat = std({ roughness: 1, metalness: 0 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1400, RANGE + 160, 8, 96), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.position.set(0, 0, -RANGE / 2 - 10); ground.receiveShadow = true; world.add(ground);
  // shoulders (dirt/pavement strip next to the road)
  const shoulderMat = std({ roughness: 1 });
  for (const sx of [-1, 1]) {
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(3.2, RANGE + 60, 1, 96), shoulderMat);
    sh.rotation.x = -Math.PI / 2; sh.position.set(sx * (ROAD_W / 2 + 1.6), 0.012, -RANGE / 2 + 40); sh.receiveShadow = true; world.add(sh);
  }
  const lineMat = std({ color: 0xf4f4f4, roughness: 0.7 });
  for (const sx of [-1, 1]) {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(0.18, RANGE + 60, 1, 96), lineMat);
    l.rotation.x = -Math.PI / 2; l.position.set(sx * (ROAD_W / 2 - 0.35), 0.03, -RANGE / 2 + 40); world.add(l);
  }
  const dashMat = std({ color: 0xf2f2f2, roughness: 0.7 });
  const dashes = new Repeater(world, 9, () => {
    const g = new THREE.Group();
    for (const x of [-2.15, 2.15]) { const d = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.02, 3.2), dashMat); d.position.set(x, 0.035, 0); g.add(d); }
    return g;
  });
  W.road = road; W.ground = ground; W.groundMat = groundMat; W.shoulderMat = shoulderMat; W.asphalt = asphalt; W.dashes = dashes;

  // backdrop ring (distant scenery cut-out, not fogged, not bent)
  const ringGeo = new THREE.CylinderGeometry(530, 530, 150, 48, 1, true, 0, Math.PI * 2);
  const ringMat = new THREE.MeshBasicMaterial({ transparent: true, alphaTest: 0.2, side: THREE.BackSide, fog: false, depthWrite: false });
  const ring = new THREE.Mesh(ringGeo, ringMat); ring.position.y = 60; ring.renderOrder = -1; scene.add(ring);
  W.ring = ring; W.ringMat = ringMat;

  // billboards + overhead gantry (all worlds)
  const bbTex = [tex('billboard1', { mirror: false }), tex('billboard2', { mirror: false })];
  const postMat = std({ color: 0x6b6f75, roughness: 0.6, metalness: 0.7 });
  const bbMats = bbTex.map((t) => std({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.6 }));
  W.bbMats = bbMats;
  const billboards = new Repeater(world, 170, (i) => {
    const g = new THREE.Group();
    const sx = i % 2 === 0 ? -1 : 1;
    const panel = new THREE.Mesh(new THREE.BoxGeometry(12, 6, 0.25), [postMat, postMat, postMat, postMat, bbMats[i % 2], postMat]);
    panel.position.set(sx * 17, 7.5, 0); panel.rotation.y = -sx * 0.55; panel.castShadow = false; g.add(panel);
    for (const dx of [-3.5, 3.5]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 4.5, 8), postMat); p.position.set(sx * 17 + dx * Math.cos(0.55), 2.25, -sx * dx * Math.sin(0.55)); g.add(p); }
    return g;
  }, 30);
  const signTex = tex('shopsign', { mirror: false });
  const signMat = std({ map: signTex, emissiveMap: signTex, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.5 });
  W.signMat = signMat;
  const gantries = new Repeater(world, 610, () => {
    const g = new THREE.Group();
    for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.5, 7.5, 0.5), postMat); p.position.set(sx * (ROAD_W / 2 + 1.2), 3.75, 0); g.add(p); }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(ROAD_W + 3, 0.5, 0.5), postMat); beam.position.set(0, 7.5, 0); g.add(beam);
    const sign = new THREE.Mesh(new THREE.BoxGeometry(12, 3, 0.2), [postMat, postMat, postMat, postMat, signMat, postMat]); sign.position.set(0, 6.0, 0.2); g.add(sign);
    return g;
  }, -120);
  W.always = [billboards, gantries];

  // ---------------------------------------------------------- per-world content
  const railMat = std({ color: 0xb8bcc2, roughness: 0.45, metalness: 0.8 });
  const guardrail = () => new Repeater(world, 4, () => {
    const g = new THREE.Group();
    for (const sx of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.32, 4.05), railMat); rail.position.set(sx * (ROAD_W / 2 + 3.3), 0.7, -2); g.add(rail);
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.75, 0.1), railMat); post.position.set(sx * (ROAD_W / 2 + 3.35), 0.38, 0); g.add(post);
    }
    return g;
  });

  // countryside
  {
    const oak = cutoutParts('tree_oak', 11, 768 / 670, { sink: 0.2 });
    const pine = cutoutParts('tree_pine', 14, 476 / 1045);
    W.worlds.country = {
      ground: 'grass', groundRepeat: 7, shoulder: 'sand', shoulderTint: 0x8a7a5a, backdrop: 'hills_green', backdropH: 70,
      scatters: [new Scatter(world, oak, 36, 12, 70, [0.7, 1.3], { billboard: true }), new Scatter(world, pine, 36, 12, 90, [0.7, 1.4], { billboard: true })],
      repeaters: [guardrail()],
      fog: { day: 0xc9dcec, sunset: 0xe9b48a, night: 0x0a0f1e }, fogFar: 430,
    };
  }
  // desert
  {
    const cactus = cutoutParts('cactus', 6, 362 / 1059);
    const rock = { geometry: new THREE.DodecahedronGeometry(1.2, 0), material: std({ color: 0xa8825c, roughness: 1 }), y: 0.5, shadow: true };
    W.worlds.desert = {
      ground: 'sand', groundRepeat: 8, shoulder: 'sand', shoulderTint: 0xffffff, backdrop: 'mesas_desert', backdropH: 110,
      scatters: [new Scatter(world, cactus, 30, 11, 70, [0.8, 1.6], { billboard: true }), new Scatter(world, [rock], 40, 9, 90, [0.5, 2.4])],
      repeaters: [guardrail()],
      fog: { day: 0xe6d6bd, sunset: 0xf0a66a, night: 0x120f22 }, fogFar: 470,
    };
  }
  // snow
  {
    const spine = cutoutParts('tree_snowpine', 12, 599 / 1084);
    const bank = { geometry: new THREE.SphereGeometry(1.5, 8, 6), material: std({ color: 0xf0f5ff, roughness: 1 }), y: 0.2 };
    const poleMat = std({ color: 0xff5a36, roughness: 0.7 });
    W.worlds.snow = {
      ground: 'snow', groundRepeat: 6, shoulder: 'snow', shoulderTint: 0xffffff, backdrop: 'mountains_snow', backdropH: 110,
      scatters: [new Scatter(world, spine, 44, 11, 80, [0.7, 1.5], { billboard: true }), new Scatter(world, [bank], 30, 8, 30, [0.6, 1.8])],
      repeaters: [new Repeater(world, 10, () => { const g = new THREE.Group(); for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.4, 0.12), poleMat); p.position.set(sx * (ROAD_W / 2 + 0.9), 0.7, 0); g.add(p); } return g; })],
      fog: { day: 0xdbe6f2, sunset: 0xf0b990, night: 0x0d1428 }, fogFar: 340,
    };
  }
  // city
  {
    const facades = ['facade_glass', 'facade_brick', 'facade_shops'].map((n) => tex(n, { mirror: false }));
    const fMats = facades.map((t) => std({ map: t, emissiveMap: t, emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.5, metalness: 0.1 }));
    const roofMat = std({ color: 0x4a4e55, roughness: 1 });
    const buildings = []; const bGroup = new THREE.Group(); world.add(bGroup);
    const mkBuilding = (i) => {
      const showroom = i % 7 === 3;
      const w = showroom ? 18 : rand(10, 18), h = showroom ? 9 : rand(9, 42), d = rand(10, 16);
      const g = new THREE.Group();
      if (showroom) {
        const lower = new THREE.Mesh(new THREE.BoxGeometry(w, 5, d), [fMats[2], fMats[2], roofMat, roofMat, fMats[2], fMats[2]]);
        scaleUV(lower.geometry, w / 9, 5 / 9, d / 9); lower.position.y = 2.5; g.add(lower);
        const band = new THREE.Mesh(new THREE.BoxGeometry(w, 1.3, d + 0.2), [roofMat, roofMat, roofMat, roofMat, signMat, roofMat]);
        scaleUV(band.geometry, 1, 1, 1); band.position.y = 5.65; g.add(band);
        const upper = new THREE.Mesh(new THREE.BoxGeometry(w, 2.7, d), [fMats[1], fMats[1], roofMat, roofMat, fMats[1], fMats[1]]);
        scaleUV(upper.geometry, w / 12, 2.7 / 12, d / 12); upper.position.y = 7.65; g.add(upper);
      } else {
        const mat = fMats[i % 3 === 2 ? 1 : i % 2];
        const tile = mat === fMats[0] ? 10 : 12;
        const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [mat, mat, roofMat, roofMat, mat, mat]);
        scaleUV(b.geometry, w / tile, h / tile, d / tile); b.position.y = h / 2; g.add(b);
        if (h > 20) { const top = new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, 2, d * 0.5), roofMat); top.position.y = h + 1; g.add(top); }
      }
      const side = i % 2 === 0 ? -1 : 1;
      g.position.set(side * (ROAD_W / 2 + 4.5 + w / 2 + rand(0, 4)), 0, -RANGE + (i / 46) * RANGE);
      g.userData.w = w;
      // showrooms face the road: rotate so the signed face (+z) looks at the road
      if (showroom) g.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
      bGroup.add(g); buildings.push(g);
    };
    for (let i = 0; i < 46; i++) mkBuilding(i);
    const lampMat = std({ color: 0x9aa0a6, roughness: 0.4, metalness: 0.8 });
    const lampGlow = bendMat(new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffe0a0, emissiveIntensity: 0 }));
    const lamps = new Repeater(world, 26, () => {
      const g = new THREE.Group();
      for (const sx of [-1, 1]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 7, 6), lampMat); pole.position.set(sx * (ROAD_W / 2 + 1.0), 3.5, 0); g.add(pole);
        const arm = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.1, 0.1), lampMat); arm.position.set(sx * (ROAD_W / 2 + 0.1), 6.95, 0); g.add(arm);
        const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.15, 0.3), lampGlow); lamp.position.set(sx * (ROAD_W / 2 - 0.8), 6.9, 0); g.add(lamp);
      }
      return g;
    });
    W.worlds.city = {
      ground: 'pavement', groundRepeat: 4, shoulder: 'pavement', shoulderTint: 0xffffff, backdrop: 'skyline_city', backdropH: 90,
      scatters: [], repeaters: [lamps], buildings, bGroup, fMats, lampGlow,
      fog: { day: 0xcfdbe8, sunset: 0xe8a878, night: 0x0b0e1a }, fogFar: 400,
    };
  }

  // ---------------------------------------------------------- switching
  W.setWorld = (name) => {
    for (const k in W.worlds) {
      const ww = W.worlds[k]; const on = k === name;
      ww.scatters.forEach((s) => s.setVisible(on)); ww.repeaters.forEach((r) => r.setVisible(on));
      if (ww.bGroup) ww.bGroup.visible = on;
    }
    const w = W.worlds[name]; W.current = w; W.currentName = name;
    const g = tex(w.ground); g.repeat.set(1400 / w.groundRepeat, (RANGE + 60) / w.groundRepeat);
    groundMat.map = g; groundMat.needsUpdate = true;
    const s = tex(w.shoulder); shoulderMat.map = s; shoulderMat.color.setHex(w.shoulderTint); shoulderMat.needsUpdate = true;
    const bd = tex(w.backdrop, { mirror: true }); bd.repeat.set(4, 1); ringMat.map = bd; ringMat.needsUpdate = true;
    ring.scale.y = w.backdropH / 150; ring.position.y = w.backdropH / 2 - 2;
  };

  W.setTime = (time, scene) => {
    const w = W.current; const night = time === 'night';
    const u = sky.material.uniforms;
    let elev, azim;
    if (time === 'day') { elev = 48; azim = 160; u.turbidity.value = 4; u.rayleigh.value = 2.2; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.8; }
    else if (time === 'sunset') { elev = 4; azim = 235; u.turbidity.value = 10; u.rayleigh.value = 3; u.mieCoefficient.value = 0.006; u.mieDirectionalG.value = 0.85; }
    else { elev = -4; azim = 180; u.turbidity.value = 2; u.rayleigh.value = 0.3; u.mieCoefficient.value = 0.002; u.mieDirectionalG.value = 0.7; }
    const phi = THREE.MathUtils.degToRad(90 - elev), theta = THREE.MathUtils.degToRad(azim);
    const sunPos = new THREE.Vector3().setFromSphericalCoords(1, phi, theta);
    u.sunPosition.value.copy(sunPos);
    // environment (reflections) from the sky itself
    if (W.envRT) W.envRT.dispose();
    const envScene = new THREE.Scene(); envScene.add(sky);
    W.envRT = pmrem.fromScene(envScene, 0.0, 0.1, 200);
    scene.add(sky);
    scene.environment = W.envRT.texture;
    scene.background = null;
    if (time === 'day') { sun.color.setHex(0xfff4e0); sun.intensity = 4.2; hemi.color.setHex(0xbfd8ff); hemi.groundColor.setHex(0x6b705c); hemi.intensity = 1.0; scene.environmentIntensity = 1.0; }
    else if (time === 'sunset') { sun.color.setHex(0xffa860); sun.intensity = 3.2; hemi.color.setHex(0xf2b58a); hemi.groundColor.setHex(0x4a3f36); hemi.intensity = 0.8; scene.environmentIntensity = 1.0; }
    else { sun.color.setHex(0x8fa0d8); sun.intensity = 1.3; hemi.color.setHex(0x3c4e80); hemi.groundColor.setHex(0x141418); hemi.intensity = 1.5; scene.environmentIntensity = 0.7; }
    W.sunDir = sunPos.clone().normalize();
    if (night) W.sunDir.set(0.3, 0.8, -0.2).normalize();
    scene.fog = new THREE.Fog(w.fog[time], 40, w.fogFar * (night ? 0.7 : 1));
    ringMat.color.setHex(night ? 0x2a3350 : time === 'sunset' ? 0xffd0a8 : 0xffffff);
    ringMat.opacity = 1;
    // emissive things at night
    for (const m of W.bbMats) m.emissiveIntensity = night ? 0.9 : 0;
    W.signMat.emissiveIntensity = night ? 0.9 : 0;
    const city = W.worlds.city;
    city.fMats.forEach((m) => { m.emissiveIntensity = night ? 0.55 : 0; m.emissive.setHex(night ? 0xffe3b0 : 0xffffff); });
    city.lampGlow.emissiveIntensity = night ? 5 : 0;
    W.night = night;
  };

  W.update = (dz, scroll, playerX) => {
    const w = W.current;
    dashes.update(scroll);
    for (const r of W.always) r.update(scroll);
    w.scatters.forEach((s) => s.update(dz)); w.repeaters.forEach((r) => r.update(scroll));
    if (w.buildings) for (const b of w.buildings) { b.position.z += dz; if (b.position.z > 60) b.position.z -= RANGE; }
    asphalt.offset.y += dz / 7;
    if (groundMat.map) groundMat.map.offset.y += dz / w.groundRepeat;
    if (shoulderMat.map && shoulderMat.map !== groundMat.map) shoulderMat.map.offset.y += dz / w.groundRepeat;
    ring.position.x = playerX;
    // sun follows the car so shadows always land near it
    sun.target.position.set(playerX, 0, -8);
    sun.position.copy(W.sunDir).multiplyScalar(80).add(sun.target.position);
  };
  return W;
}

function scaleUV(geo, sx, sy, sz) {
  // BoxGeometry uv per face: scale so the facade tiles every `tile` metres
  const uv = geo.attributes.uv; const n = uv.count;
  // faces order: +x,-x (d×h), +y,-y (w×d), +z,-z (w×h); 4 verts each
  const faces = [[sz, sy], [sz, sy], [sx, sz], [sx, sz], [sx, sy], [sx, sy]];
  for (let f = 0; f < 6; f++) for (let k = 0; k < 4; k++) { const i = f * 4 + k; uv.setXY(i, uv.getX(i) * faces[f][0], uv.getY(i) * faces[f][1]); }
  uv.needsUpdate = true;
}
