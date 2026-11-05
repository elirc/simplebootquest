export function averageAmountPerCategory(transactions) {
  const groups = {};
  for (const x of transactions) (groups[x.category] ??= []).push(x.amount);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.floor(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
