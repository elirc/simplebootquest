export function citiesByAvgTemp(cities) {
  return [...cities].sort((a, b) => a.avgTemp - b.avgTemp).map((x) => x.name);
}
