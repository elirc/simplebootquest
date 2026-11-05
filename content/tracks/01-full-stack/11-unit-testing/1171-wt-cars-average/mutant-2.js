// mutant: reduce starts from 1 instead of 0
const CARS = [
  {id: 1, model: "Corolla", priceK: 15, km: 10905, year: 2019, fuel: "electric"},
  {id: 2, model: "Golf", priceK: 23, km: 41597, year: 2011, fuel: "petrol"},
  {id: 3, model: "Model 3", priceK: 23, km: 36655, year: 2024, fuel: "hybrid"},
  {id: 4, model: "Polo", priceK: 53, km: 155916, year: 2022, fuel: "diesel"},
  {id: 5, model: "Prius", priceK: 46, km: 130106, year: 2016, fuel: "hybrid"},
  {id: 6, model: "Fiesta", priceK: 57, km: 105182, year: 2015, fuel: "electric"},
  {id: 7, model: "Clio", priceK: 38, km: 65369, year: 2022, fuel: "electric"},
  {id: 8, model: "Leaf", priceK: 55, km: 57454, year: 2022, fuel: "diesel"}
];

function averageKm(cars) {
  if (cars.length === 0) return null;
  const total = cars.reduce((sum, x) => sum + x.km, 1);
  return Math.round((total / cars.length) * 10) / 10;
}
