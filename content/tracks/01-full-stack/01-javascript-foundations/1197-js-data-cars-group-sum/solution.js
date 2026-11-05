export function priceKPerFuel(cars) {
  const totals = {};
  for (const x of cars) totals[x.fuel] = (totals[x.fuel] ?? 0) + x.priceK;
  return totals;
}
