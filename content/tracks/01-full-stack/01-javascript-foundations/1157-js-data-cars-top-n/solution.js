export function topCarsByYear(cars, n) {
  return [...cars].sort((a, b) => b.year - a.year).slice(0, n).map((x) => x.model);
}
