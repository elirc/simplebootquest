interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function allCitiesUnder(cities: City[], limit: number): boolean {
  // TODO
  return 0 as any;
}
