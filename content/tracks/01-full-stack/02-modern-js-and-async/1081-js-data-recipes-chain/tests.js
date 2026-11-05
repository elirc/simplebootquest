const RECIPES = [
  {id: 1, name: "Falafel", minutes: 88, calories: 477, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Tacos", minutes: 103, calories: 410, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Chili", minutes: 113, calories: 808, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Paella", minutes: 88, calories: 765, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Risotto", minutes: 20, calories: 791, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Pancakes", minutes: 95, calories: 246, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Pho", minutes: 111, calories: 904, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Curry", minutes: 114, calories: 572, cuisine: "mexican", difficulty: "easy", vegetarian: true}
];

test("with \"easy\"", () => {
  expect(recipesInDifficultyRanked(RECIPES, "easy")).toEqual(["Paella","Curry"]);
});

test("with \"medium\"", () => {
  expect(recipesInDifficultyRanked(RECIPES, "medium")).toEqual(["Tacos"]);
});

test("with \"hard\"", () => {
  expect(recipesInDifficultyRanked(RECIPES, "hard")).toEqual(["Pho","Chili","Risotto","Falafel","Pancakes"]);
});
