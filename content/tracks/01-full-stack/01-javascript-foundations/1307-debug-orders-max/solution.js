export function highestItems(orders) {
  let best = null;
  for (const x of orders) if (best === null || x.items > best.items) best = x;
  return best ? best.code : null;
}
