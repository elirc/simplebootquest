export function summariseCities(cities) {
  return cities.map(({ id, name, avgTemp }) => ({ id, name, avgTemp }));
}
