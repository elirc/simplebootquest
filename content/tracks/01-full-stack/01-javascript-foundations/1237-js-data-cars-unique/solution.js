export function distinctFuels(cars) {
  return [...new Set(cars.map((x) => x.fuel))].sort();
}
