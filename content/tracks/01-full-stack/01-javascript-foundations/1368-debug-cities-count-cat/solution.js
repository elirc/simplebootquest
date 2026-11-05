export function countCitiesByContinent(cities, value) {
  let count = 0;
  for (const x of cities) if (x.continent === value) count++;
  return count;
}
