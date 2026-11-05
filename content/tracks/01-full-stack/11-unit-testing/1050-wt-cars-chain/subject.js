const CARS = [
  {id: 1, model: "Mustang", priceK: 43, km: 78078, year: 2023, fuel: "electric"},
  {id: 2, model: "Civic", priceK: 50, km: 168628, year: 2017, fuel: "electric"},
  {id: 3, model: "Prius", priceK: 37, km: 24176, year: 2019, fuel: "petrol"},
  {id: 4, model: "Model 3", priceK: 55, km: 51405, year: 2014, fuel: "electric"},
  {id: 5, model: "Golf", priceK: 39, km: 60535, year: 2019, fuel: "petrol"},
  {id: 6, model: "Mazda3", priceK: 28, km: 49924, year: 2018, fuel: "petrol"},
  {id: 7, model: "Polo", priceK: 35, km: 153548, year: 2013, fuel: "electric"},
  {id: 8, model: "Leaf", priceK: 46, km: 45142, year: 2014, fuel: "petrol"}
];

function carsInFuelRanked(cars, value) {
  return cars
    .filter((x) => x.fuel === value)
    .sort((a, b) => b.km - a.km)
    .map((x) => x.model);
}
