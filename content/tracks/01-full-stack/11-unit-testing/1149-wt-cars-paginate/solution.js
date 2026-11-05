test("with 1, 3", () => {
  expect(pageOfCars(CARS, 1, 3)).toEqual({"items":["Model 3","Clio","Fiesta"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfCars(CARS, 2, 3)).toEqual({"items":["Prius","Corolla","Golf"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfCars(CARS, 3, 3)).toEqual({"items":["Mustang","Ioniq"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfCars(CARS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
