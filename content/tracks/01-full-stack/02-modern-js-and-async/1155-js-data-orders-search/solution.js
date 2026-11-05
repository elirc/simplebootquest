export function searchOrders(orders, query) {
  const q = query.trim().toLowerCase();
  return orders.filter((x) => x.code.toLowerCase().includes(q)).map((x) => x.code);
}
