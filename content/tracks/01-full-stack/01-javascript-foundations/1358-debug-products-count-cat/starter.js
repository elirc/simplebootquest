export function countProductsByCategory(products, value) {
  let count = 0;
  for (const x of products) if (x.category !== value) count++;
  return count;
}
