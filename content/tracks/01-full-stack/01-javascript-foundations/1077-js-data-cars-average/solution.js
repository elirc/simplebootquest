export function averageYear(cars) {
  if (cars.length === 0) return null;
  const total = cars.reduce((sum, x) => sum + x.year, 0);
  return Math.round((total / cars.length) * 10) / 10;
}
