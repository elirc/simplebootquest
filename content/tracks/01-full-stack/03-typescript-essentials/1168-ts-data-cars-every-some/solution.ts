interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function allCarsUnder(cars: Car[], limit: number): boolean {
  return cars.every((x) => x.year < limit);
}
