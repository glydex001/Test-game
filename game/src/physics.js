// Arcade-but-honest car physics shared by the player and traffic.
// Heading θ: the car model faces -Z, so forward = (-sin θ, -cos θ) in the XZ plane, right = (cos θ, -sin θ).
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

export class CarBody {
  constructor(spec) {
    this.spec = spec;
    this.x = 0; this.z = 0; this.h = 0;      // position / heading
    this.vx = 0; this.vz = 0;                // world velocity
    this.yawRate = 0;
    this.throttle = 0; this.brake = 0; this.steer = 0;
    this.offRoad = false; this.surfaceGrip = 1;
    this.steerAngle = 0;                     // visual front wheel angle
    this.vf = 0; this.vl = 0;
    this.halfW = spec.w / 2; this.halfL = spec.len / 2;
    this.mass = spec.len > 5 ? 2.2 : 1.6;
  }
  fwd() { return [-Math.sin(this.h), -Math.cos(this.h)]; }
  right() { return [Math.cos(this.h), -Math.sin(this.h)]; }
  speed() { return Math.hypot(this.vx, this.vz); }
  // the two circles used for collisions (front and rear axle)
  circles() {
    const [fx, fz] = this.fwd(); const d = this.halfL * 0.55; const r = this.halfW + 0.08;
    return [[this.x + fx * d, this.z + fz * d, r], [this.x - fx * d, this.z - fz * d, r]];
  }

  update(dt, maxSpeed, accel, handling, boost) {
    const [fx, fz] = this.fwd(); const [rx, rz] = this.right();
    let vf = this.vx * fx + this.vz * fz;
    let vl = this.vx * rx + this.vz * rz;
    const top = maxSpeed * (boost ? 1.3 : 1) * (this.offRoad ? 0.25 : 1);

    // engine / brakes / reverse
    if (this.throttle > 0) vf += this.throttle * accel * (boost ? 2 : 1) * Math.max(0.12, 1 - 0.7 * clamp(vf / top, 0, 1)) * dt;
    if (this.brake > 0) {
      if (vf > 0.5) vf -= this.brake * 16 * dt;
      else vf = Math.max(vf - this.brake * 4 * dt, -4);      // holding STOP at a standstill reverses slowly
    }
    // rolling resistance + air drag
    vf -= vf * (this.offRoad ? 1.4 : 0.12) * dt;
    vf -= 0.0018 * vf * Math.abs(vf) * dt;
    if (vf > top) vf += (top - vf) * Math.min(1, 2 * dt);
    if (Math.abs(vf) < 0.05 && this.throttle === 0 && this.brake === 0) vf = 0;

    // steering: yaw rate grows with speed at low speed, tapers at high speed
    const sp = Math.abs(vf);
    const steerGain = handling * 0.09;
    const want = this.steer * steerGain * clamp(sp / 6, 0, 1) * (1 / (1 + sp / 35)) * Math.sign(vf || 1);
    this.yawRate += (want - this.yawRate) * Math.min(1, 8 * dt);
    this.h += this.yawRate * dt;
    this.steerAngle += (this.steer * 0.42 - this.steerAngle) * Math.min(1, 10 * dt);

    // lateral grip: the car slides a little when turning hard at speed, more off-road
    const grip = (this.offRoad ? 2.2 : 7.5) * this.surfaceGrip;
    vl -= vl * Math.min(1, grip * dt);
    // the turn itself converts a bit of forward motion into slide at speed
    const slide = this.yawRate * sp * 0.08 * (this.offRoad ? 2.5 : 1);
    vl += slide * dt;
    vl = clamp(vl, -12, 12);

    // back to world (using the NEW heading so the car goes where it points)
    const [nfx, nfz] = this.fwd(); const [nrx, nrz] = this.right();
    this.vx = nfx * vf + nrx * vl; this.vz = nfz * vf + nrz * vl;
    this.x += this.vx * dt; this.z += this.vz * dt;
    this.vf = vf; this.vl = vl;
  }
}

// --- collision helpers -------------------------------------------------------
// circle vs circle between two bodies; returns closing speed (0 if no hit)
export function collideCars(a, b, restitution = 0.35) {
  let worst = 0;
  const ca = a.circles(), cb = b.circles();
  for (const [ax, az, ar] of ca) for (const [bx, bz, br] of cb) {
    const dx = bx - ax, dz = bz - az; const dist = Math.hypot(dx, dz); const min = ar + br;
    if (dist >= min || dist < 1e-4) continue;
    const nx = dx / dist, nz = dz / dist; const pen = min - dist;
    const ma = a.mass, mb = b.mass, tot = ma + mb;
    a.x -= nx * pen * (mb / tot); a.z -= nz * pen * (mb / tot);
    b.x += nx * pen * (ma / tot); b.z += nz * pen * (ma / tot);
    const rvx = b.vx - a.vx, rvz = b.vz - a.vz; const vn = rvx * nx + rvz * nz;
    if (vn < 0) {
      const j = -(1 + restitution) * vn / (1 / ma + 1 / mb);
      a.vx -= j * nx / ma; a.vz -= j * nz / ma; b.vx += j * nx / mb; b.vz += j * nz / mb;
      // a knock also spins the cars a bit
      const [rx, rz] = a.right(); const side = (nx * rx + nz * rz);
      a.yawRate += side * Math.min(2, -vn * 0.08); b.yawRate -= side * Math.min(2, -vn * 0.08);
      worst = Math.max(worst, -vn);
    }
  }
  return worst;
}

// body vs static circle obstacle (tree, pole). returns closing speed
export function collideCircle(a, ox, oz, orad, restitution = 0.25) {
  let worst = 0;
  for (const [cx, cz, cr] of a.circles()) {
    const dx = cx - ox, dz = cz - oz; const dist = Math.hypot(dx, dz); const min = cr + orad;
    if (dist >= min || dist < 1e-4) continue;
    const nx = dx / dist, nz = dz / dist; const pen = min - dist;
    a.x += nx * pen; a.z += nz * pen;
    const vn = a.vx * nx + a.vz * nz;
    if (vn < 0) { a.vx -= (1 + restitution) * vn * nx; a.vz -= (1 + restitution) * vn * nz; worst = Math.max(worst, -vn); a.yawRate += (Math.random() - 0.5) * Math.min(3, -vn * 0.15); }
  }
  return worst;
}

// body vs oriented box (building): box centre (bx,bz), half sizes, heading bh
export function collideBox(a, bx, bz, hw, hl, bh, restitution = 0.2) {
  let worst = 0;
  const c = Math.cos(bh), s = Math.sin(bh);
  for (const [cx, cz, cr] of a.circles()) {
    // into box space (box right = (cos, -sin), box forward = (-sin, -cos))
    const dx = cx - bx, dz = cz - bz;
    const lx = dx * c - dz * s;          // along box right
    const lz = -dx * s - dz * c;         // along box forward
    const qx = clamp(lx, -hw, hw), qz = clamp(lz, -hl, hl);
    let ex = lx - qx, ez = lz - qz; let dist = Math.hypot(ex, ez);
    let nx, nz, pen;
    if (dist > 1e-4) { if (dist >= cr) continue; nx = ex / dist; nz = ez / dist; pen = cr - dist; }
    else { // centre inside the box: push out through the nearest face
      const px = hw - Math.abs(lx), pz = hl - Math.abs(lz);
      if (px < pz) { nx = Math.sign(lx) || 1; nz = 0; pen = px + cr; } else { nx = 0; nz = Math.sign(lz) || 1; pen = pz + cr; }
    }
    // normal back to world
    const wx = nx * c - nz * s, wz = -nx * s - nz * c;
    a.x += wx * pen; a.z += wz * pen;
    const vn = a.vx * wx + a.vz * wz;
    if (vn < 0) { a.vx -= (1 + restitution) * vn * wx; a.vz -= (1 + restitution) * vn * wz; worst = Math.max(worst, -vn); }
  }
  return worst;
}
