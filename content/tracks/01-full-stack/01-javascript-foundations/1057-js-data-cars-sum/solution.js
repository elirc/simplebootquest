export function totalPriceK(cars) {
  return cars.reduce((sum, x) => sum + x.priceK, 0);
}
