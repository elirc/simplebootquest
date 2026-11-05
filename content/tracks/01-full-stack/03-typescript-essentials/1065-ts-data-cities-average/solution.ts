interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function averageAvgTemp(cities: City[]): number | null {
  if (cities.length === 0) return null;
  const total = cities.reduce((sum, x) => sum + x.avgTemp, 0);
  return Math.round((total / cities.length) * 10) / 10;
}
