export function describeCities(cities) {
  return cities.map((x) => `${x.name} (${x.avgTemp})`);
}
