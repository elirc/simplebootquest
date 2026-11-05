export function averageTotalCents(orders) {
  if (orders.length === 0) return null;
  const total = orders.reduce((sum, x) => sum + x.totalCents, 0);
  return Math.round((total / orders.length) * 10) / 10;
}
