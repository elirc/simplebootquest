export function summariseOrders(orders) {
  return orders.map(({ id, code, totalCents }) => ({ id, code, totalCents }));
}
