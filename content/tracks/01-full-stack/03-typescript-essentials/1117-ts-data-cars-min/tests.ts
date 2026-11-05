const CARS = [
  {id: 1, model: "Model 3", priceK: 54, km: 108512, year: 2020, fuel: "diesel"},
  {id: 2, model: "Civic", priceK: 41, km: 100185, year: 2010, fuel: "electric"},
  {id: 3, model: "Ioniq", priceK: 15, km: 118098, year: 2012, fuel: "petrol"},
  {id: 4, model: "Mazda3", priceK: 33, km: 24874, year: 2010, fuel: "hybrid"},
  {id: 5, model: "Corolla", priceK: 31, km: 151060, year: 2017, fuel: "hybrid"},
  {id: 6, model: "Clio", priceK: 32, km: 46818, year: 2012, fuel: "electric"},
  {id: 7, model: "Golf", priceK: 34, km: 17633, year: 2015, fuel: "hybrid"},
  {id: 8, model: "Prius", priceK: 22, km: 124173, year: 2019, fuel: "electric"}
];

test("an empty list", () => {
  expect(lowestYear([])).toEqual(null);
});

test("all cars", () => {
  expect(lowestYear(CARS)).toEqual("Civic");
});
