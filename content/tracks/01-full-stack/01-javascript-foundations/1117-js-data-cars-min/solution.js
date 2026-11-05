export function lowestKm(cars) {
  let best = null;
  for (const x of cars) if (best === null || x.km < best.km) best = x;
  return best ? best.model : null;
}
