export function highestDelayMin(flights) {
  let best = null;
  for (const x of flights) if (best === null || x.delayMin > best.delayMin) best = x;
  return best ? best.number : null;
}
