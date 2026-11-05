export function lowestTotalCents(orders) {
  let best = null;
  for (const x of orders) if (best === null || x.totalCents < best.totalCents) best = x;
  return best ? best.code : null;
}
