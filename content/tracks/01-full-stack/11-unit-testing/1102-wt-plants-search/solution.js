test("with \"in\"", () => {
  expect(searchPlants(PLANTS, "in")).toEqual(["Mint"]);
});

test("with \"IN\"", () => {
  expect(searchPlants(PLANTS, "IN")).toEqual(["Mint"]);
});

test("with \"  \"", () => {
  expect(searchPlants(PLANTS, "  ")).toEqual(["Aloe","Monstera","Mint","Ivy","Peace Lily","Basil","Snake Plant","Lavender"]);
});

test("with \"zzz\"", () => {
  expect(searchPlants(PLANTS, "zzz")).toEqual([]);
});
