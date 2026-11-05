export function lowestDurationMin(flights) {
  let best = null;
  for (const x of flights) if (best === null || x.durationMin < best.durationMin) best = x;
  return best ? best.number : null;
}
