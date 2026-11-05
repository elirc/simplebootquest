const CARS = [
  {id: 1, model: "Corolla", priceK: 20, km: 87756, year: 2009, fuel: "hybrid"},
  {id: 2, model: "Ioniq", priceK: 41, km: 105736, year: 2011, fuel: "diesel"},
  {id: 3, model: "Prius", priceK: 19, km: 75963, year: 2018, fuel: "hybrid"},
  {id: 4, model: "Model 3", priceK: 35, km: 29449, year: 2014, fuel: "diesel"},
  {id: 5, model: "Fiesta", priceK: 18, km: 53696, year: 2012, fuel: "diesel"},
  {id: 6, model: "Clio", priceK: 19, km: 163725, year: 2012, fuel: "petrol"},
  {id: 7, model: "Polo", priceK: 51, km: 63801, year: 2021, fuel: "petrol"},
  {id: 8, model: "Leaf", priceK: 39, km: 135510, year: 2008, fuel: "electric"}
];

function searchCars(cars, query) {
  const q = query.trim().toLowerCase();
  return cars.filter((x) => x.model.toLowerCase().includes(q)).map((x) => x.model);
}
