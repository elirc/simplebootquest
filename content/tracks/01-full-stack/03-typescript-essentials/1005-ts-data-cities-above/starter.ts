interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function citiesAbove(cities: City[], min: number): string[] {
  // TODO
  return [] as any;
}
