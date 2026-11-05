export function totalCentsPerStatus(orders) {
  const totals = {};
  for (const x of orders) totals[x.status] = (totals[x.status] ?? 0) + x.totalCents;
  return totals;
}
