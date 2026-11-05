export function countCarsByFuel(cars, value) {
  let count = 0;
  for (const x of cars) if (x.fuel === value) count++;
  return count;
}
