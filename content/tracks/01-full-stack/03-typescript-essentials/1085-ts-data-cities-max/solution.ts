interface City {
  id: number;
  name: string;
  population: number;
  avgTemp: number;
  continent: "Europe" | "Africa" | "Americas" | "Asia" | "Oceania";
}

export function highestAvgTemp(cities: City[]): string | null {
  let best = null;
  for (const x of cities) if (best === null || x.avgTemp > best.avgTemp) best = x;
  return best ? best.name : null;
}
