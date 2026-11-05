interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function countCitiesByContinent(cities: City[], value: string): number {
  let count = 0;
  for (const x of cities) if (x.continent === value) count++;
  return count;
}
