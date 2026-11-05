// mutant: `Math.ceil` became `Math.floor`
const CARS = [
  {id: 1, model: "Model 3", priceK: 14, km: 25300, year: 2018, fuel: "hybrid"},
  {id: 2, model: "Clio", priceK: 26, km: 72954, year: 2018, fuel: "hybrid"},
  {id: 3, model: "Fiesta", priceK: 38, km: 71732, year: 2012, fuel: "electric"},
  {id: 4, model: "Prius", priceK: 50, km: 9015, year: 2014, fuel: "diesel"},
  {id: 5, model: "Corolla", priceK: 15, km: 96640, year: 2020, fuel: "electric"},
  {id: 6, model: "Golf", priceK: 14, km: 119530, year: 2012, fuel: "hybrid"},
  {id: 7, model: "Mustang", priceK: 58, km: 42478, year: 2023, fuel: "petrol"},
  {id: 8, model: "Ioniq", priceK: 49, km: 73799, year: 2012, fuel: "petrol"}
];

function pageOfCars(cars, page, size) {
  const totalPages = Math.floor(cars.length / size);
  const items = cars.slice((page - 1) * size, page * size).map((x) => x.model);
  return { items, page, totalPages };
}
