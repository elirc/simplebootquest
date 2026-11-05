export function bumpItems(orders, value, amount) {
  return orders.map((x) => (x.country === value ? { ...x, items: x.items + amount } : x));
}
