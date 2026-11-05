const RECIPES = [
  {id: 1, name: "Risotto", minutes: 64, calories: 418, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Pho", minutes: 48, calories: 654, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Chili", minutes: 86, calories: 352, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Shakshuka", minutes: 118, calories: 881, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Curry", minutes: 98, calories: 676, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 44, calories: 333, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Gyoza", minutes: 20, calories: 578, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Pancakes", minutes: 48, calories: 861, cuisine: "asian", difficulty: "medium", vegetarian: true}
];

test("an empty list", () => {
  expect(averageMinutesPerDifficulty([])).toEqual({});
});

test("all recipes", () => {
  expect(averageMinutesPerDifficulty(RECIPES)).toEqual({"hard":55,"medium":83,"easy":71});
});
