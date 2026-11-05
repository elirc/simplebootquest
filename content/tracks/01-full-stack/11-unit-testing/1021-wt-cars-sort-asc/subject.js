const CARS = [
  {id: 1, model: "Polo", priceK: 39, km: 113912, year: 2019, fuel: "diesel"},
  {id: 2, model: "Golf", priceK: 16, km: 164052, year: 2016, fuel: "petrol"},
  {id: 3, model: "Civic", priceK: 26, km: 101582, year: 2008, fuel: "diesel"},
  {id: 4, model: "Ioniq", priceK: 45, km: 146372, year: 2024, fuel: "diesel"},
  {id: 5, model: "Corolla", priceK: 18, km: 40661, year: 2014, fuel: "petrol"},
  {id: 6, model: "Mazda3", priceK: 28, km: 52738, year: 2017, fuel: "hybrid"},
  {id: 7, model: "Clio", priceK: 35, km: 11313, year: 2019, fuel: "diesel"},
  {id: 8, model: "Leaf", priceK: 39, km: 4108, year: 2024, fuel: "petrol"}
];

function carsByYear(cars) {
  return [...cars].sort((a, b) => a.year - b.year).map((x) => x.model);
}
