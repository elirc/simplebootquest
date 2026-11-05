export function bumpTotalCents(orders, value, amount) {
  return orders.map((x) => (x.country !== value ? { ...x, totalCents: x.totalCents + amount } : x));
}
