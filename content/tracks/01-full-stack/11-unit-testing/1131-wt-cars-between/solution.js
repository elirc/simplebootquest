test("with 29, 47", () => {
  expect(carsInRange(CARS, 29, 47)).toEqual(["Prius","Clio","Ioniq"]);
});

test("with 47, 50", () => {
  expect(carsInRange(CARS, 47, 50)).toEqual(["Ioniq","Leaf"]);
});

test("with 29, 29", () => {
  expect(carsInRange(CARS, 29, 29)).toEqual(["Prius"]);
});
