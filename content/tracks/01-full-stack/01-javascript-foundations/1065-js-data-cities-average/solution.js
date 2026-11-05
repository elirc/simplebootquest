export function averagePopulation(cities) {
  if (cities.length === 0) return null;
  const total = cities.reduce((sum, x) => sum + x.population, 0);
  return Math.round((total / cities.length) * 10) / 10;
}
