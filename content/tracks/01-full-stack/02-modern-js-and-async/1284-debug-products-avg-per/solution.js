export function averageStockPerCategory(products) {
  const groups = {};
  for (const x of products) (groups[x.category] ??= []).push(x.stock);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
