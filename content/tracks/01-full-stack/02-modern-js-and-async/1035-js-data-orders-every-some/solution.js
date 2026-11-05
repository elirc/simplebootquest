export function allOrdersUnder(orders, limit) {
  return orders.every((x) => x.totalCents < limit);
}
