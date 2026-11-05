export function lowestHeightCm(plants) {
  let best = null;
  for (const x of plants) if (best === null || x.heightCm < best.heightCm) best = x;
  return best ? best.name : null;
}
