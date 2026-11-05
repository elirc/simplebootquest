const CARS = [
  {id: 1, model: "Clio", priceK: 57, km: 104321, year: 2020, fuel: "petrol"},
  {id: 2, model: "Model 3", priceK: 27, km: 66952, year: 2013, fuel: "petrol"},
  {id: 3, model: "Fiesta", priceK: 40, km: 87470, year: 2022, fuel: "diesel"},
  {id: 4, model: "Polo", priceK: 34, km: 158301, year: 2022, fuel: "hybrid"},
  {id: 5, model: "Mazda3", priceK: 24, km: 134190, year: 2009, fuel: "hybrid"},
  {id: 6, model: "Prius", priceK: 30, km: 66488, year: 2021, fuel: "electric"},
  {id: 7, model: "Civic", priceK: 16, km: 24414, year: 2015, fuel: "diesel"},
  {id: 8, model: "Mustang", priceK: 52, km: 67308, year: 2022, fuel: "petrol"}
];

test("with 66952, 87470", () => {
  expect(carsInRange(CARS, 66952, 87470)).toEqual(["Model 3","Fiesta","Mustang"]);
});

test("with 87470, 104321", () => {
  expect(carsInRange(CARS, 87470, 104321)).toEqual(["Clio","Fiesta"]);
});

test("with 66952, 66952", () => {
  expect(carsInRange(CARS, 66952, 66952)).toEqual(["Model 3"]);
});
