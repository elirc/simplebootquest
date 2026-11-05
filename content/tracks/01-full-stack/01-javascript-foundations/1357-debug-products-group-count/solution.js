export function countProductsPerCategory(products) {
  const counts = {};
  for (const x of products) counts[x.category] = (counts[x.category] ?? 0) + 1;
  return counts;
}
