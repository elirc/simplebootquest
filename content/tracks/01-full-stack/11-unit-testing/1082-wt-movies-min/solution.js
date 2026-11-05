test("an empty list", () => {
  expect(lowestYear([])).toEqual(null);
});

test("all movies", () => {
  expect(lowestYear(MOVIES)).toEqual("Night Train");
});
