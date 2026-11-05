interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function citiesInRange(cities: City[], low: number, high: number): string[] {
  return cities.filter((x) => x.population >= low && x.population <= high).map((x) => x.name);
}
