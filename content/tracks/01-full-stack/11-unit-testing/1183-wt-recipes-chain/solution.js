test("with \"italian\"", () => {
  expect(recipesInCuisineRanked(RECIPES, "italian")).toEqual(["Pancakes"]);
});

test("with \"asian\"", () => {
  expect(recipesInCuisineRanked(RECIPES, "asian")).toEqual(["Chili","Risotto","Pho","Curry"]);
});

test("with \"mexican\"", () => {
  expect(recipesInCuisineRanked(RECIPES, "mexican")).toEqual(["Tacos","Lasagne"]);
});
