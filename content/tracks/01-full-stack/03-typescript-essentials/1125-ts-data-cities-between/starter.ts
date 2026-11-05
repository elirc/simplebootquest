interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function citiesInRange(cities: City[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
