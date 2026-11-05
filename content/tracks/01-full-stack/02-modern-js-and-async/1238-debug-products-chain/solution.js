export function productsInCategoryRanked(products, value) {
  return products
    .filter((x) => x.category === value)
    .sort((a, b) => b.stock - a.stock)
    .map((x) => x.name);
}
