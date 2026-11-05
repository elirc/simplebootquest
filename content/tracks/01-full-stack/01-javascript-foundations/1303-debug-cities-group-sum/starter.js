export function populationPerContinent(cities) {
  const totals = {};
  for (const x of cities) totals[x.continent] = (totals[x.continent] ?? 1) + x.population;
  return totals;
}
