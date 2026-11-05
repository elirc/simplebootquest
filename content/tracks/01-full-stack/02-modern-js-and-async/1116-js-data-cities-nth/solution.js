export function nthByAvgTemp(cities, n) {
  const sorted = [...cities].sort((a, b) => b.avgTemp - a.avgTemp);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
