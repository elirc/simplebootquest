export function productsInCategoryRanked(products, value) {
  return products
    .filter((x) => x.category === value)
    .sort((a, b) => a.stock - b.stock)
    .map((x) => x.name);
}
