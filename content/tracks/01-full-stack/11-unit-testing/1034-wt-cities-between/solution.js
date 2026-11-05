test("with 5346, 6407", () => {
  expect(citiesInRange(CITIES, 5346, 6407)).toEqual(["Quito","Cairo","Lisbon"]);
});

test("with 6407, 7384", () => {
  expect(citiesInRange(CITIES, 6407, 7384)).toEqual(["Quito","Oslo"]);
});

test("with 5346, 5346", () => {
  expect(citiesInRange(CITIES, 5346, 5346)).toEqual(["Cairo"]);
});
