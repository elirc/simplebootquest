export function countCarsPerFuel(cars) {
  const counts = {};
  for (const x of cars) counts[x.fuel] = (counts[x.fuel] ?? 0) + 1;
  return counts;
}
