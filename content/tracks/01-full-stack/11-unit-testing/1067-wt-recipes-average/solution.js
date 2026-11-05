test("an empty list", () => {
  expect(averageCalories([])).toEqual(null);
});

test("all recipes", () => {
  expect(averageCalories(RECIPES)).toEqual(547.4);
});
