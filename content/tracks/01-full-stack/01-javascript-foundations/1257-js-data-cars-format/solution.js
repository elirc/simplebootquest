export function describeCars(cars) {
  return cars.map((x) => `${x.model} (${x.year})`);
}
