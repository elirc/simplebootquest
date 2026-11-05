export function countCitiesPerContinent(cities) {
  const counts = {};
  for (const x of cities) counts[x.continent] = (counts[x.continent] ?? 0) + 1;
  return counts;
}
