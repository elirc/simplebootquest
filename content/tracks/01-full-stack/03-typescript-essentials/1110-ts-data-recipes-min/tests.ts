const RECIPES = [
  {id: 1, name: "Lasagne", minutes: 23, calories: 396, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Paella", minutes: 36, calories: 338, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Tacos", minutes: 64, calories: 263, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Chili", minutes: 15, calories: 392, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Falafel", minutes: 75, calories: 407, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Pho", minutes: 67, calories: 399, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Curry", minutes: 111, calories: 797, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Shakshuka", minutes: 48, calories: 396, cuisine: "italian", difficulty: "medium", vegetarian: true}
];

test("an empty list", () => {
  expect(lowestCalories([])).toEqual(null);
});

test("all recipes", () => {
  expect(lowestCalories(RECIPES)).toEqual("Tacos");
});
