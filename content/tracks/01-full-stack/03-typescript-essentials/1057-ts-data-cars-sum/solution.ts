interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function totalYear(cars: Car[]): number {
  return cars.reduce((sum, x) => sum + x.year, 0);
}
