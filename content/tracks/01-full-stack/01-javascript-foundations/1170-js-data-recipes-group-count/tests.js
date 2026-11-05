const RECIPES = [
  {id: 1, name: "Risotto", minutes: 28, calories: 380, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Gyoza", minutes: 58, calories: 550, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Lasagne", minutes: 100, calories: 691, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Paella", minutes: 17, calories: 442, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Shakshuka", minutes: 111, calories: 295, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Chili", minutes: 60, calories: 722, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Tacos", minutes: 57, calories: 523, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Pho", minutes: 41, calories: 437, cuisine: "asian", difficulty: "hard", vegetarian: false}
];

test("an empty list", () => {
  expect(countRecipesPerCuisine([])).toEqual({});
});

test("all recipes", () => {
  expect(countRecipesPerCuisine(RECIPES)).toEqual({"middle-eastern":3,"italian":1,"mexican":2,"asian":2});
});
