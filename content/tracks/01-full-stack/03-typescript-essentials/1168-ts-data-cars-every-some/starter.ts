interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function allCarsUnder(cars: Car[], limit: number): boolean {
  // TODO
  return 0 as any;
}
