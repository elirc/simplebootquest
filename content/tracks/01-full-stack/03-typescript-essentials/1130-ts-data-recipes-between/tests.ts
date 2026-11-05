const RECIPES = [
  {id: 1, name: "Paella", minutes: 51, calories: 780, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Falafel", minutes: 33, calories: 685, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Risotto", minutes: 16, calories: 185, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Curry", minutes: 67, calories: 808, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Lasagne", minutes: 68, calories: 871, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Ramen", minutes: 43, calories: 657, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Gyoza", minutes: 55, calories: 397, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 79, calories: 422, cuisine: "mexican", difficulty: "hard", vegetarian: false}
];

test("with 43, 55", () => {
  expect(recipesInRange(RECIPES, 43, 55)).toEqual(["Paella","Ramen","Gyoza"]);
});

test("with 55, 67", () => {
  expect(recipesInRange(RECIPES, 55, 67)).toEqual(["Curry","Gyoza"]);
});

test("with 43, 43", () => {
  expect(recipesInRange(RECIPES, 43, 43)).toEqual(["Ramen"]);
});
