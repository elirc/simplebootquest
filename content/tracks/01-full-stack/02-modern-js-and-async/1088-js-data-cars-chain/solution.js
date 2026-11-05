export function carsInFuelRanked(cars, value) {
  return cars
    .filter((x) => x.fuel === value)
    .sort((a, b) => b.km - a.km)
    .map((x) => x.model);
}
