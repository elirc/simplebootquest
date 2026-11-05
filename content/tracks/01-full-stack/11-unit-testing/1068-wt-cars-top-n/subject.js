const CARS = [
  {id: 1, model: "Ioniq", priceK: 15, km: 48040, year: 2016, fuel: "diesel"},
  {id: 2, model: "Model 3", priceK: 26, km: 160391, year: 2010, fuel: "diesel"},
  {id: 3, model: "Polo", priceK: 38, km: 52587, year: 2011, fuel: "diesel"},
  {id: 4, model: "Fiesta", priceK: 48, km: 86454, year: 2020, fuel: "petrol"},
  {id: 5, model: "Prius", priceK: 16, km: 74272, year: 2016, fuel: "hybrid"},
  {id: 6, model: "Mustang", priceK: 37, km: 89092, year: 2016, fuel: "electric"},
  {id: 7, model: "Civic", priceK: 20, km: 85228, year: 2015, fuel: "diesel"},
  {id: 8, model: "Leaf", priceK: 40, km: 30531, year: 2022, fuel: "diesel"}
];

function topCarsByKm(cars, n) {
  return [...cars].sort((a, b) => b.km - a.km).slice(0, n).map((x) => x.model);
}
