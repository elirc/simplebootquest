const RECIPES = [
  {id: 1, name: "Ramen", minutes: 68, calories: 231, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Curry", minutes: 35, calories: 536, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Risotto", minutes: 46, calories: 866, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Lasagne", minutes: 43, calories: 695, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Chili", minutes: 65, calories: 189, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Pho", minutes: 73, calories: 290, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Paella", minutes: 104, calories: 314, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Gyoza", minutes: 53, calories: 481, cuisine: "asian", difficulty: "easy", vegetarian: false}
];

test("an empty list", () => {
  expect(caloriesPerDifficulty([])).toEqual({});
});

test("all recipes", () => {
  expect(caloriesPerDifficulty(RECIPES)).toEqual({"easy":712,"hard":1710,"medium":1180});
});
