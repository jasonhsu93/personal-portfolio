// Ball positions and hoop geometry share normalized coordinates with the camera
// plate. The replay counts downward crossings of both the top and bottom gates.
export const hoop = { x: 0.732, rimY: 0.418, halfWidth: 0.050, netDepth: 0.120 };
const attempts = [
  { startX: 0.12, startY: 0.76, offset: -0.007, lift: 0.38, drift: 0.013 },
  { startX: 0.22, startY: 0.81, offset: 0.090, lift: 0.34, drift: 0.10 },
  { startX: 0.09, startY: 0.78, offset: 0.006, lift: 0.37, drift: 0.010 },
];
const flightMs = 2260;
const rimTime = 0.71;
export const shotMs = 3070;
export const shotCount = attempts.length;
export const durationMs = shotMs * shotCount;

function ballAt(shot, flight) {
  const aimX = hoop.x + shot.offset;
  if (flight <= rimTime) {
    const t = Math.max(0, flight / rimTime);
    return {
      x: shot.startX + (aimX - shot.startX) * t,
      y: shot.startY + (hoop.rimY - shot.startY) * t - 4 * shot.lift * t * (1 - t),
    };
  }
  const t = (flight - rimTime) / (1 - rimTime);
  return { x: aimX + shot.drift * t, y: hoop.rimY + 0.21 * t + 0.36 * t * t };
}

function crossesGate(previous, current, y, halfWidth) {
  if (previous.y >= y || current.y < y) return false;
  const t = (y - previous.y) / (current.y - previous.y);
  const crossingX = previous.x + (current.x - previous.x) * t;
  return Math.abs(crossingX - hoop.x) <= halfWidth;
}

function findBasketTime(shot) {
  let entered = false;
  let previous = ballAt(shot, 0);
  for (let frame = 1; frame <= 180; frame += 1) {
    const t = frame / 180;
    const current = ballAt(shot, t);
    if (crossesGate(previous, current, hoop.rimY, hoop.halfWidth)) entered = true;
    if (entered && crossesGate(previous, current, hoop.rimY + hoop.netDepth, hoop.halfWidth * 0.9)) return t * flightMs;
    previous = current;
  }
  return null;
}

// Deriving the score from crossing times makes pausing, seeking, and dropped
// render frames safe. Rendering a frame twice cannot count a basket twice.
const basketTimes = attempts.map(findBasketTime);
export function replayFrame(elapsed) {
  const time = Math.max(0, Math.min(elapsed, durationMs));
  const index = Math.min(Math.floor(time / shotMs), shotCount - 1);
  const local = time - index * shotMs;
  const t = Math.min(local / flightMs, 1);
  const shot = attempts[index];
  const basketTime = basketTimes[index];
  const scored = basketTime !== null && local >= basketTime;
  const missed = basketTime === null && local >= flightMs * (rimTime + 0.10);
  const score = basketTimes.filter((at, i) => at !== null && time >= i * shotMs + at).length;
  const trail = Array.from({ length: 6 }, (_, i) => ballAt(shot, Math.max(0, t - (6 - i) * 0.018)));
  return { ball: ballAt(shot, t), trail, t, index, score, scored, missed, ballVisible: local < flightMs, done: time >= durationMs };
}
