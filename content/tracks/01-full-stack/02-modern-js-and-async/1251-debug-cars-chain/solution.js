export function carsInFuelRanked(cars, value) {
  return cars
    .filter((x) => x.fuel === value)
    .sort((a, b) => b.priceK - a.priceK)
    .map((x) => x.model);
}
