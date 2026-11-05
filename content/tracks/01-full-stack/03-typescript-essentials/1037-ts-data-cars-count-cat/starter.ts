interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function countCarsByFuel(cars: Car[], value: string): number {
  // TODO
  return 0 as any;
}
