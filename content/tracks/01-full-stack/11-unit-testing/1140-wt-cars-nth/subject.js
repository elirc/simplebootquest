const CARS = [
  {id: 1, model: "Clio", priceK: 37, km: 52281, year: 2017, fuel: "hybrid"},
  {id: 2, model: "Corolla", priceK: 49, km: 102531, year: 2008, fuel: "diesel"},
  {id: 3, model: "Mustang", priceK: 53, km: 21242, year: 2020, fuel: "hybrid"},
  {id: 4, model: "Prius", priceK: 21, km: 137153, year: 2021, fuel: "diesel"},
  {id: 5, model: "Leaf", priceK: 42, km: 112306, year: 2023, fuel: "diesel"},
  {id: 6, model: "Model 3", priceK: 20, km: 96860, year: 2011, fuel: "hybrid"},
  {id: 7, model: "Mazda3", priceK: 41, km: 69898, year: 2022, fuel: "electric"},
  {id: 8, model: "Civic", priceK: 28, km: 28162, year: 2023, fuel: "hybrid"}
];

function nthByKm(cars, n) {
  const sorted = [...cars].sort((a, b) => b.km - a.km);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].model : null;
}
