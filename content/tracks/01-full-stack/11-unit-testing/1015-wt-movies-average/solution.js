test("an empty list", () => {
  expect(averageYear([])).toEqual(null);
});

test("all movies", () => {
  expect(averageYear(MOVIES)).toEqual(2009.8);
});
