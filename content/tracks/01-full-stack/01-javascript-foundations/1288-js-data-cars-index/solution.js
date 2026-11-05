export function carsById(cars) {
  const byId = {};
  for (const x of cars) byId[x.id] = x.model;
  return byId;
}
