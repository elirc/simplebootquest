const RECIPES = [
  {id: 1, name: "Paella", minutes: 119, calories: 778, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Falafel", minutes: 73, calories: 890, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Shakshuka", minutes: 82, calories: 471, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Chili", minutes: 106, calories: 934, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Ramen", minutes: 49, calories: 540, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 97, calories: 622, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Curry", minutes: 35, calories: 310, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Pancakes", minutes: 65, calories: 230, cuisine: "asian", difficulty: "hard", vegetarian: false}
];

test("with \"italian\"", () => {
  expect(countRecipesByCuisine(RECIPES, "italian")).toEqual(4);
});

test("with \"asian\"", () => {
  expect(countRecipesByCuisine(RECIPES, "asian")).toEqual(3);
});

test("with \"mexican\"", () => {
  expect(countRecipesByCuisine(RECIPES, "mexican")).toEqual(0);
});

test("with \"nope\"", () => {
  expect(countRecipesByCuisine(RECIPES, "nope")).toEqual(0);
});
