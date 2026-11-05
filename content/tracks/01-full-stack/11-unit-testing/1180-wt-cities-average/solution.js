test("an empty list", () => {
  expect(averagePopulation([])).toEqual(null);
});

test("all cities", () => {
  expect(averagePopulation(CITIES)).toEqual(6419);
});
