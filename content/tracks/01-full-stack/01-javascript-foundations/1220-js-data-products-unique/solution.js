export function distinctCategorys(products) {
  return [...new Set(products.map((x) => x.category))].sort();
}
