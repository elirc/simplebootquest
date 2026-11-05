interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function summariseCities(cities: City[]): { id: number; name: string; avgTemp: number }[] {
  // TODO
  return {} as any;
}
