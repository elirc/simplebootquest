export function averagePopulationPerContinent(cities) {
  const groups = {};
  for (const x of cities) (groups[x.continent] ??= []).push(x.population);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
