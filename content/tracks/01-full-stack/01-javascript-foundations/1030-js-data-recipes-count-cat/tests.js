const RECIPES = [
  {id: 1, name: "Paella", minutes: 118, calories: 757, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Shakshuka", minutes: 44, calories: 786, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Curry", minutes: 47, calories: 197, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Pho", minutes: 79, calories: 302, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Tacos", minutes: 25, calories: 409, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Chili", minutes: 14, calories: 520, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Gyoza", minutes: 65, calories: 469, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Risotto", minutes: 89, calories: 762, cuisine: "mexican", difficulty: "medium", vegetarian: true}
];

test("with \"easy\"", () => {
  expect(countRecipesByDifficulty(RECIPES, "easy")).toEqual(3);
});

test("with \"medium\"", () => {
  expect(countRecipesByDifficulty(RECIPES, "medium")).toEqual(1);
});

test("with \"hard\"", () => {
  expect(countRecipesByDifficulty(RECIPES, "hard")).toEqual(4);
});

test("with \"nope\"", () => {
  expect(countRecipesByDifficulty(RECIPES, "nope")).toEqual(0);
});
