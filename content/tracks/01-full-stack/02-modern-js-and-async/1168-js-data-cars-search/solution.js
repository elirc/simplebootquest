export function searchCars(cars, query) {
  const q = query.trim().toLowerCase();
  return cars.filter((x) => x.model.toLowerCase().includes(q)).map((x) => x.model);
}
