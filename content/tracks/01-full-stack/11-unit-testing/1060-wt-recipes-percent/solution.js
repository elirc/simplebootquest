test("an empty list", () => {
  expect(percentVegetarian([])).toEqual(0);
});

test("all recipes", () => {
  expect(percentVegetarian(RECIPES)).toEqual(38);
});
