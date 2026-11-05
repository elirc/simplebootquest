interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function carsInRange(cars: Car[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
