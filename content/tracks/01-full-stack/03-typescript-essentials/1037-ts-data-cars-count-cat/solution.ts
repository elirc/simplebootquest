interface Car {
  id: number;
  model: string;
  priceK: number;
  km: number;
  year: number;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
}

export function countCarsByFuel(cars: Car[], value: string): number {
  let count = 0;
  for (const x of cars) if (x.fuel === value) count++;
  return count;
}
