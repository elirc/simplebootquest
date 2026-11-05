export function carsAbove(cars, min) {
  return cars.filter((x) => x.year > min).map((x) => x.model);
}
