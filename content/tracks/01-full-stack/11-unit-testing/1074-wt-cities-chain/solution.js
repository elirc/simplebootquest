test("with \"Europe\"", () => {
  expect(citiesInContinentRanked(CITIES, "Europe")).toEqual([]);
});

test("with \"Africa\"", () => {
  expect(citiesInContinentRanked(CITIES, "Africa")).toEqual(["Oslo","Cairo"]);
});

test("with \"Americas\"", () => {
  expect(citiesInContinentRanked(CITIES, "Americas")).toEqual(["Accra","Quito"]);
});
