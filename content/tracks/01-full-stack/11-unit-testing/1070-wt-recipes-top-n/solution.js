test('does not mutate the input', () => {
  const before = JSON.stringify(RECIPES);
  topRecipesByMinutes(RECIPES, 1);
  expect(JSON.stringify(RECIPES)).toBe(before);
});

test("with 1", () => {
  expect(topRecipesByMinutes(RECIPES, 1)).toEqual(["Pho"]);
});

test("with 3", () => {
  expect(topRecipesByMinutes(RECIPES, 3)).toEqual(["Pho","Chili","Paella"]);
});

test("with 0", () => {
  expect(topRecipesByMinutes(RECIPES, 0)).toEqual([]);
});
