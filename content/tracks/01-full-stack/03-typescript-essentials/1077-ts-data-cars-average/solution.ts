interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function averageYear(cars: Car[]): number | null {
  if (cars.length === 0) return null;
  const total = cars.reduce((sum, x) => sum + x.year, 0);
  return Math.round((total / cars.length) * 10) / 10;
}
