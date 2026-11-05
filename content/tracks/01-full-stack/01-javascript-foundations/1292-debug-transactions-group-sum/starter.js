export function dayPerCategory(transactions) {
  const totals = {};
  for (const x of transactions) totals[x.category] = (totals[x.category] ?? 1) + x.day;
  return totals;
}
