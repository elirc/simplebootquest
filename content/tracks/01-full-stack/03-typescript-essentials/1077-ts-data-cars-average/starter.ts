interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function averageYear(cars: Car[]): number | null {
  // TODO
  return 0 as any;
}
