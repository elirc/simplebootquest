test("with \"ur\"", () => {
  expect(searchCities(CITIES, "ur")).toEqual(["Turin"]);
});

test("with \"UR\"", () => {
  expect(searchCities(CITIES, "UR")).toEqual(["Turin"]);
});

test("with \"  \"", () => {
  expect(searchCities(CITIES, "  ")).toEqual(["Lisbon","Turin","Lima","Seoul","Perth","Oslo","Accra","Hanoi"]);
});

test("with \"zzz\"", () => {
  expect(searchCities(CITIES, "zzz")).toEqual([]);
});
