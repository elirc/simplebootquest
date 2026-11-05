test('does not mutate the input', () => {
  const before = JSON.stringify(RECIPES);
  recipesByMinutes(RECIPES);
  expect(JSON.stringify(RECIPES)).toBe(before);
});

test("all recipes", () => {
  expect(recipesByMinutes(RECIPES)).toEqual(["Ramen","Gyoza","Curry","Risotto","Falafel","Pancakes","Tacos","Pho"]);
});
