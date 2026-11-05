export function countProductsPerCategory(products) {
  const counts = {};
  for (const x of products) counts[x.category] = (counts[x.category] ?? 1) + 1;
  return counts;
}
