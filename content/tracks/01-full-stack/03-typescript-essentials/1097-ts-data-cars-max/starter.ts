interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function highestYear(cars: Car[]): string | null {
  // TODO
  return 0 as any;
}
