test("with 1", () => {
  expect(nthByCalories(RECIPES, 1)).toEqual("Shakshuka");
});

test("with 2", () => {
  expect(nthByCalories(RECIPES, 2)).toEqual("Curry");
});

test("with 5", () => {
  expect(nthByCalories(RECIPES, 5)).toEqual("Risotto");
});

test("with 0", () => {
  expect(nthByCalories(RECIPES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByCalories(RECIPES, 99)).toEqual(null);
});
