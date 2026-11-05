export function carsByPriceK(cars) {
  return [...cars].sort((a, b) => a.priceK - b.priceK).map((x) => x.model);
}
