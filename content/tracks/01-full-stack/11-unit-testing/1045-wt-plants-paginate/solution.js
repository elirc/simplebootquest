test("with 1, 3", () => {
  expect(pageOfPlants(PLANTS, 1, 3)).toEqual({"items":["Peace Lily","Ivy","Cactus"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfPlants(PLANTS, 2, 3)).toEqual({"items":["Aloe","Lavender","Snake Plant"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfPlants(PLANTS, 3, 3)).toEqual({"items":["Fern","Bonsai"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfPlants(PLANTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
