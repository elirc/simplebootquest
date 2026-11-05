export function averageTotalCentsPerStatus(orders) {
  const groups = {};
  for (const x of orders) (groups[x.status] ??= []).push(x.totalCents);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
