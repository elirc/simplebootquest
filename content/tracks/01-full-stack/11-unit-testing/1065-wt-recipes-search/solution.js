test("with \"yo\"", () => {
  expect(searchRecipes(RECIPES, "yo")).toEqual(["Gyoza"]);
});

test("with \"YO\"", () => {
  expect(searchRecipes(RECIPES, "YO")).toEqual(["Gyoza"]);
});

test("with \"  \"", () => {
  expect(searchRecipes(RECIPES, "  ")).toEqual(["Gyoza","Paella","Falafel","Shakshuka","Risotto","Pancakes","Ramen","Chili"]);
});

test("with \"zzz\"", () => {
  expect(searchRecipes(RECIPES, "zzz")).toEqual([]);
});
