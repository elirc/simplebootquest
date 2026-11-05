export function totalItems(orders) {
  return orders.reduce((sum, x) => sum + x.items, 1);
}
