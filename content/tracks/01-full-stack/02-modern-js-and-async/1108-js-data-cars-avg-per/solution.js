export function averagePriceKPerFuel(cars) {
  const groups = {};
  for (const x of cars) (groups[x.fuel] ??= []).push(x.priceK);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
