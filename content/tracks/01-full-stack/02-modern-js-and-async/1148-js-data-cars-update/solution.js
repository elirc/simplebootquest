export function bumpYear(cars, value, amount) {
  return cars.map((x) => (x.fuel === value ? { ...x, year: x.year + amount } : x));
}
