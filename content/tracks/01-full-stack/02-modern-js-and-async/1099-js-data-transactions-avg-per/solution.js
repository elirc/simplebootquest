export function averageDayPerCategory(transactions) {
  const groups = {};
  for (const x of transactions) (groups[x.category] ??= []).push(x.day);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
