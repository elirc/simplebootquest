export function bumpStock(products, value, amount) {
  return products.map((x) => (x.category === value ? { ...x, stock: x.stock + amount } : x));
}
