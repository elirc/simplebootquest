const RECIPES = [
  {id: 1, name: "Pho", minutes: 38, calories: 569, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Falafel", minutes: 90, calories: 284, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Lasagne", minutes: 120, calories: 446, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Paella", minutes: 16, calories: 293, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Tacos", minutes: 23, calories: 531, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Ramen", minutes: 113, calories: 465, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Curry", minutes: 29, calories: 636, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Chili", minutes: 71, calories: 377, cuisine: "mexican", difficulty: "easy", vegetarian: true}
];

test("with 377", () => {
  expect(allRecipesUnder(RECIPES, 377)).toEqual(false);
});

test("with 637", () => {
  expect(allRecipesUnder(RECIPES, 637)).toEqual(true);
});

test("with 636", () => {
  expect(allRecipesUnder(RECIPES, 636)).toEqual(false);
});
