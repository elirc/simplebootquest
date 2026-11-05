export function summariseCars(cars) {
  return cars.map(({ id, model, priceK }) => ({ id, model, priceK }));
}
