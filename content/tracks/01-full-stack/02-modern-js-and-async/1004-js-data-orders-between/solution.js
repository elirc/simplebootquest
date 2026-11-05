export function ordersInRange(orders, low, high) {
  return orders.filter((x) => x.totalCents >= low && x.totalCents <= high).map((x) => x.code);
}
