interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function carsAbove(cars: Car[], min: number): string[] {
  // TODO
  return [] as any;
}
