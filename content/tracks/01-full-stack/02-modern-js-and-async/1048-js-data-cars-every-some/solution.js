export function allCarsUnder(cars, limit) {
  return cars.every((x) => x.km < limit);
}
