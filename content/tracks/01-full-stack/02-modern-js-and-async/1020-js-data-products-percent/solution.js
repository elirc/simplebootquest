export function percentOnSale(products) {
  if (products.length === 0) return 0;
  return Math.round((products.filter((x) => x.onSale).length / products.length) * 100);
}
