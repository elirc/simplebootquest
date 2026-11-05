export function highestAvgTemp(cities) {
  let best = null;
  for (const x of cities) if (best === null || x.avgTemp > best.avgTemp) best = x;
  return best ? best.name : null;
}
