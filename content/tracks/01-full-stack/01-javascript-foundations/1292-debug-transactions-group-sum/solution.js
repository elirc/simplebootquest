export function dayPerCategory(transactions) {
  const totals = {};
  for (const x of transactions) totals[x.category] = (totals[x.category] ?? 0) + x.day;
  return totals;
}
