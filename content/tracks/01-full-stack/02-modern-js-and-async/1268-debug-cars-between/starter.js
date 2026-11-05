export function carsInRange(cars, low, high) {
  return cars.filter((x) => x.km > low && x.km <= high).map((x) => x.model);
}
