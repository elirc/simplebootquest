interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function citiesAbove(cities: City[], min: number): string[] {
  return cities.filter((x) => x.population > min).map((x) => x.name);
}
