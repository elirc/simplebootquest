test("with 1, 3", () => {
  expect(pageOfRecipes(RECIPES, 1, 3)).toEqual({"items":["Risotto","Lasagne","Gyoza"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfRecipes(RECIPES, 2, 3)).toEqual({"items":["Pancakes","Tacos","Paella"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfRecipes(RECIPES, 3, 3)).toEqual({"items":["Falafel","Curry"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfRecipes(RECIPES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
