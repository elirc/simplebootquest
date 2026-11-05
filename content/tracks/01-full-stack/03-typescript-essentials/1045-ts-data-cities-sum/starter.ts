interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function totalAvgTemp(cities: City[]): number {
  // TODO
  return 0 as any;
}
