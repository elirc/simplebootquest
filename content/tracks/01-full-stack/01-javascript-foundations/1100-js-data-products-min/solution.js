export function lowestPrice(products) {
  let best = null;
  for (const x of products) if (best === null || x.price < best.price) best = x;
  return best ? best.name : null;
}
