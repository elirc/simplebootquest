export function topCarsByYear(cars, n) {
  return [...cars].sort((a, b) => a.year - b.year).slice(0, n).map((x) => x.model);
}
