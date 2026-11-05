export function carsByKm(cars) {
  return [...cars].sort((a, b) => a.km - b.km).map((x) => x.model);
}
