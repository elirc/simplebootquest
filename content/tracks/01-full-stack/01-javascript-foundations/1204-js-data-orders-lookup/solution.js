export function itemsOf(orders, code) {
  const found = orders.find((x) => x.code === code);
  return found ? found.items : null;
}
