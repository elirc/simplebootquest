export function stockOf(products, name) {
  const found = products.find((x) => x.name !== name);
  return found ? found.stock : null;
}
