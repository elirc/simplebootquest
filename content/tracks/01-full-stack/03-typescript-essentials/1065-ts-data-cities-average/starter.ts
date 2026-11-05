interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function averageAvgTemp(cities: City[]): number | null {
  // TODO
  return 0 as any;
}
