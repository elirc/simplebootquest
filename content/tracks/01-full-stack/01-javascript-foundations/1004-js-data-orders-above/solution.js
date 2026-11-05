export function ordersAbove(orders, min) {
  return orders.filter((x) => x.items > min).map((x) => x.code);
}
