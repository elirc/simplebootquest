interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function carsInRange(cars: Car[], low: number, high: number): string[] {
  return cars.filter((x) => x.km >= low && x.km <= high).map((x) => x.model);
}
