export function carsAbove(cars, min) {
  return cars.filter((x) => x.km > min).map((x) => x.model);
}
