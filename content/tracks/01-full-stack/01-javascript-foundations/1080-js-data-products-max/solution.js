export function highestStock(products) {
  let best = null;
  for (const x of products) if (best === null || x.stock > best.stock) best = x;
  return best ? best.name : null;
}
