export function avgTempOf(cities, name) {
  const found = cities.find((x) => x.name === name);
  return found ? found.avgTemp : null;
}
