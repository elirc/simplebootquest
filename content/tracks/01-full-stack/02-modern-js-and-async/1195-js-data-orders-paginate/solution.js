export function pageOfOrders(orders, page, size) {
  const totalPages = Math.ceil(orders.length / size);
  const items = orders.slice((page - 1) * size, page * size).map((x) => x.code);
  return { items, page, totalPages };
}
