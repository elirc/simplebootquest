interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function carsAbove(cars: Car[], min: number): string[] {
  return cars.filter((x) => x.priceK > min).map((x) => x.model);
}
