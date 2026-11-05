export function ordersInStatusRanked(orders, value) {
  return orders
    .filter((x) => x.status === value)
    .sort((a, b) => b.totalCents - a.totalCents)
    .map((x) => x.code);
}
