const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 40, calories: 795, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 109, calories: 571, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Pho", minutes: 39, calories: 609, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Lasagne", minutes: 23, calories: 728, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Ramen", minutes: 61, calories: 295, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 45, calories: 473, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Paella", minutes: 113, calories: 746, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Curry", minutes: 68, calories: 840, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false}
];

test("with \"italian\"", () => {
  expect(countRecipesByCuisine(RECIPES, "italian")).toEqual(2);
});

test("with \"asian\"", () => {
  expect(countRecipesByCuisine(RECIPES, "asian")).toEqual(2);
});

test("with \"mexican\"", () => {
  expect(countRecipesByCuisine(RECIPES, "mexican")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countRecipesByCuisine(RECIPES, "nope")).toEqual(0);
});
