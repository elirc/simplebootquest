// mutant: boundary: `>=` became `>`
const CARS = [
  {id: 1, model: "Civic", priceK: 54, km: 30734, year: 2010, fuel: "electric"},
  {id: 2, model: "Golf", priceK: 22, km: 109739, year: 2010, fuel: "electric"},
  {id: 3, model: "Prius", priceK: 29, km: 68498, year: 2014, fuel: "petrol"},
  {id: 4, model: "Clio", priceK: 36, km: 76098, year: 2010, fuel: "diesel"},
  {id: 5, model: "Mustang", priceK: 24, km: 45058, year: 2018, fuel: "hybrid"},
  {id: 6, model: "Ioniq", priceK: 47, km: 122201, year: 2017, fuel: "petrol"},
  {id: 7, model: "Model 3", priceK: 55, km: 86222, year: 2010, fuel: "petrol"},
  {id: 8, model: "Leaf", priceK: 50, km: 145765, year: 2015, fuel: "electric"}
];

function carsInRange(cars, low, high) {
  return cars.filter((x) => x.priceK > low && x.priceK <= high).map((x) => x.model);
}
