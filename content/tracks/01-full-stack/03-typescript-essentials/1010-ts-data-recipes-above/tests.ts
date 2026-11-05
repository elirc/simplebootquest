const RECIPES = [
  {id: 1, name: "Ramen", minutes: 98, calories: 357, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Tacos", minutes: 27, calories: 258, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Pancakes", minutes: 34, calories: 664, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Pho", minutes: 13, calories: 516, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Shakshuka", minutes: 94, calories: 730, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Falafel", minutes: 69, calories: 423, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Chili", minutes: 21, calories: 795, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Risotto", minutes: 85, calories: 948, cuisine: "mexican", difficulty: "medium", vegetarian: false}
];

test("with 423", () => {
  expect(recipesAbove(RECIPES, 423)).toEqual(["Pancakes","Pho","Shakshuka","Chili","Risotto"]);
});

test("with 664", () => {
  expect(recipesAbove(RECIPES, 664)).toEqual(["Shakshuka","Chili","Risotto"]);
});

test("with 999999", () => {
  expect(recipesAbove(RECIPES, 999999)).toEqual([]);
});
