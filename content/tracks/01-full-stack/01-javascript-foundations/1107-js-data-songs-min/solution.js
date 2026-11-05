export function lowestSeconds(songs) {
  let best = null;
  for (const x of songs) if (best === null || x.seconds < best.seconds) best = x;
  return best ? best.title : null;
}
