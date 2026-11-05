interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function highestAvgTemp(cities: City[]): string | null {
  // TODO
  return 0 as any;
}
