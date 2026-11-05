export function averageStarsPerCity(hotels) {
  const groups = {};
  for (const x of hotels) (groups[x.city] ??= []).push(x.stars);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
