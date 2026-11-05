export function kmOf(cars, model) {
  const found = cars.find((x) => x.model === model);
  return found ? found.km : null;
}
