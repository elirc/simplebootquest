const RECIPES = [
  {id: 1, name: "Curry", minutes: 75, calories: 379, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Pancakes", minutes: 67, calories: 844, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Pho", minutes: 21, calories: 525, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Shakshuka", minutes: 39, calories: 525, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Tacos", minutes: 99, calories: 862, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Ramen", minutes: 25, calories: 743, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Paella", minutes: 114, calories: 523, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Lasagne", minutes: 64, calories: 797, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true}
];

test("an empty list", () => {
  expect(lowestCalories([])).toEqual(null);
});

test("all recipes", () => {
  expect(lowestCalories(RECIPES)).toEqual("Curry");
});
