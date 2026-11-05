export function pageOfCars(cars, page, size) {
  const totalPages = Math.ceil(cars.length / size);
  const items = cars.slice((page - 1) * size, page * size).map((x) => x.model);
  return { items, page, totalPages };
}
