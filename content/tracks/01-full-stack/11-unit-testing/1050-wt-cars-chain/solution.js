test("with \"petrol\"", () => {
  expect(carsInFuelRanked(CARS, "petrol")).toEqual(["Golf","Mazda3","Leaf","Prius"]);
});

test("with \"diesel\"", () => {
  expect(carsInFuelRanked(CARS, "diesel")).toEqual([]);
});

test("with \"electric\"", () => {
  expect(carsInFuelRanked(CARS, "electric")).toEqual(["Civic","Polo","Mustang","Model 3"]);
});
