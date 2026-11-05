const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 25, calories: 743, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Pho", minutes: 71, calories: 181, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Gyoza", minutes: 32, calories: 917, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Chili", minutes: 82, calories: 401, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Lasagne", minutes: 20, calories: 942, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Ramen", minutes: 86, calories: 418, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Pancakes", minutes: 25, calories: 356, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Falafel", minutes: 46, calories: 644, cuisine: "asian", difficulty: "medium", vegetarian: true}
];

test("an empty list", () => {
  expect(distinctCuisines([])).toEqual([]);
});

test("all recipes", () => {
  expect(distinctCuisines(RECIPES)).toEqual(["asian","italian","mexican","middle-eastern"]);
});
