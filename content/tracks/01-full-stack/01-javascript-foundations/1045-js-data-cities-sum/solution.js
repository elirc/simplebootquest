export function totalAvgTemp(cities) {
  return cities.reduce((sum, x) => sum + x.avgTemp, 0);
}
