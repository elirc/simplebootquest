export function describeOrders(orders) {
  return orders.map((x) => `${x.code} (${x.totalCents})`);
}
