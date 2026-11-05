interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function totalAvgTemp(cities: City[]): number {
  return cities.reduce((sum, x) => sum + x.avgTemp, 0);
}
