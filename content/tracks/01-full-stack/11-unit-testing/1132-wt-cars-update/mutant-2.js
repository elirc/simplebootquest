// mutant: mutates the original objects
const CARS = [
  {id: 1, model: "Polo", priceK: 42, km: 129232, year: 2013, fuel: "electric"},
  {id: 2, model: "Fiesta", priceK: 40, km: 51015, year: 2022, fuel: "hybrid"},
  {id: 3, model: "Ioniq", priceK: 30, km: 164713, year: 2018, fuel: "diesel"},
  {id: 4, model: "Prius", priceK: 27, km: 30049, year: 2018, fuel: "hybrid"},
  {id: 5, model: "Mustang", priceK: 52, km: 173281, year: 2019, fuel: "petrol"},
  {id: 6, model: "Model 3", priceK: 31, km: 97819, year: 2017, fuel: "electric"},
  {id: 7, model: "Golf", priceK: 33, km: 113352, year: 2015, fuel: "diesel"},
  {id: 8, model: "Leaf", priceK: 43, km: 79126, year: 2022, fuel: "electric"}
];

function bumpPriceK(cars, value, amount) {
  return cars.map((x) => (x.fuel === value ? Object.assign(x, { priceK: x.priceK + amount } : x));
}
