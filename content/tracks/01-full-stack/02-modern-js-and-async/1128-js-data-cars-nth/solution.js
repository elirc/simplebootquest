export function nthByKm(cars, n) {
  const sorted = [...cars].sort((a, b) => b.km - a.km);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].model : null;
}
