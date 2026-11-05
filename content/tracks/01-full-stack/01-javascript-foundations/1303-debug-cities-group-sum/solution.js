export function populationPerContinent(cities) {
  const totals = {};
  for (const x of cities) totals[x.continent] = (totals[x.continent] ?? 0) + x.population;
  return totals;
}
