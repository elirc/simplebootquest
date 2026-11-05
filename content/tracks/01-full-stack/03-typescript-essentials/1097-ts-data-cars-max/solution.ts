interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function highestYear(cars: Car[]): string | null {
  let best = null;
  for (const x of cars) if (best === null || x.year > best.year) best = x;
  return best ? best.model : null;
}
