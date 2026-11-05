interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function summariseCars(cars: Car[]): { id: number; model: string; km: number }[] {
  return cars.map(({ id, model, km }) => ({ id, model, km }));
}
