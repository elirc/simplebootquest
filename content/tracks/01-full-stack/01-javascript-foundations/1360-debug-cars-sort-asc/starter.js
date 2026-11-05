export function carsByKm(cars) {
  return [...cars].sort((a, b) => b.km - a.km).map((x) => x.model);
}
