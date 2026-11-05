export function highestPriceK(cars) {
  let best = null;
  for (const x of cars) if (best === null || x.priceK > best.priceK) best = x;
  return best ? best.model : null;
}
