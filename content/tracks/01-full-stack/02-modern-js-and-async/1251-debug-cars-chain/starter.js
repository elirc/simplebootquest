export function carsInFuelRanked(cars, value) {
  return cars
    .filter((x) => x.fuel === value)
    .sort((a, b) => a.priceK - b.priceK)
    .map((x) => x.model);
}
