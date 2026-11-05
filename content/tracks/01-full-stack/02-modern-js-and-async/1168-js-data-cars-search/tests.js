const CARS = [
  {id: 1, model: "Clio", priceK: 43, km: 7991, year: 2021, fuel: "diesel"},
  {id: 2, model: "Mustang", priceK: 23, km: 162376, year: 2019, fuel: "hybrid"},
  {id: 3, model: "Model 3", priceK: 41, km: 135110, year: 2020, fuel: "electric"},
  {id: 4, model: "Ioniq", priceK: 23, km: 7618, year: 2012, fuel: "hybrid"},
  {id: 5, model: "Leaf", priceK: 28, km: 27236, year: 2012, fuel: "hybrid"},
  {id: 6, model: "Golf", priceK: 47, km: 67971, year: 2016, fuel: "electric"},
  {id: 7, model: "Corolla", priceK: 35, km: 129128, year: 2010, fuel: "petrol"},
  {id: 8, model: "Prius", priceK: 27, km: 123170, year: 2017, fuel: "diesel"}
];

test("with \"or\"", () => {
  expect(searchCars(CARS, "or")).toEqual(["Corolla"]);
});

test("with \"OR\"", () => {
  expect(searchCars(CARS, "OR")).toEqual(["Corolla"]);
});

test("with \"  \"", () => {
  expect(searchCars(CARS, "  ")).toEqual(["Clio","Mustang","Model 3","Ioniq","Leaf","Golf","Corolla","Prius"]);
});

test("with \"zzz\"", () => {
  expect(searchCars(CARS, "zzz")).toEqual([]);
});
