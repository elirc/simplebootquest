test("with \"ol\"", () => {
  expect(searchCars(CARS, "ol")).toEqual(["Corolla","Polo"]);
});

test("with \"OL\"", () => {
  expect(searchCars(CARS, "OL")).toEqual(["Corolla","Polo"]);
});

test("with \"  \"", () => {
  expect(searchCars(CARS, "  ")).toEqual(["Corolla","Ioniq","Prius","Model 3","Fiesta","Clio","Polo","Leaf"]);
});

test("with \"zzz\"", () => {
  expect(searchCars(CARS, "zzz")).toEqual([]);
});
