const CARS = [
  {id: 1, model: "Corolla", priceK: 32, km: 58967, year: 2018, fuel: "hybrid"},
  {id: 2, model: "Polo", priceK: 46, km: 96989, year: 2023, fuel: "hybrid"},
  {id: 3, model: "Mustang", priceK: 25, km: 61220, year: 2015, fuel: "diesel"},
  {id: 4, model: "Model 3", priceK: 37, km: 99879, year: 2014, fuel: "hybrid"},
  {id: 5, model: "Fiesta", priceK: 48, km: 170216, year: 2010, fuel: "electric"},
  {id: 6, model: "Leaf", priceK: 50, km: 70707, year: 2011, fuel: "petrol"},
  {id: 7, model: "Prius", priceK: 28, km: 23156, year: 2019, fuel: "electric"},
  {id: 8, model: "Mazda3", priceK: 44, km: 162939, year: 2012, fuel: "diesel"}
];

test("with 1, 3", () => {
  expect(pageOfCars(CARS, 1, 3)).toEqual({"items":["Corolla","Polo","Mustang"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfCars(CARS, 2, 3)).toEqual({"items":["Model 3","Fiesta","Leaf"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfCars(CARS, 3, 3)).toEqual({"items":["Prius","Mazda3"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfCars(CARS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
