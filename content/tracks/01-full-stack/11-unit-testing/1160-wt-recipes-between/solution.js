test("with 45, 48", () => {
  expect(recipesInRange(RECIPES, 45, 48)).toEqual(["Falafel","Pho","Shakshuka"]);
});

test("with 48, 71", () => {
  expect(recipesInRange(RECIPES, 48, 71)).toEqual(["Falafel","Curry","Shakshuka"]);
});

test("with 45, 45", () => {
  expect(recipesInRange(RECIPES, 45, 45)).toEqual(["Pho"]);
});
