export function amountPerCategory(transactions) {
  const totals = {};
  for (const x of transactions) totals[x.category] = (totals[x.category] ?? 0) + x.amount;
  return totals;
}
