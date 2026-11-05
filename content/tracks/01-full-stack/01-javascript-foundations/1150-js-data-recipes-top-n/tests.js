const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 107, calories: 591, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Pho", minutes: 16, calories: 608, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Risotto", minutes: 13, calories: 464, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Chili", minutes: 60, calories: 202, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Shakshuka", minutes: 22, calories: 432, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Paella", minutes: 95, calories: 264, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Falafel", minutes: 43, calories: 782, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Curry", minutes: 34, calories: 610, cuisine: "mexican", difficulty: "medium", vegetarian: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(RECIPES);
  topRecipesByCalories(RECIPES, 1);
  expect(JSON.stringify(RECIPES)).toBe(before);
});

test("with 1", () => {
  expect(topRecipesByCalories(RECIPES, 1)).toEqual(["Falafel"]);
});

test("with 3", () => {
  expect(topRecipesByCalories(RECIPES, 3)).toEqual(["Falafel","Curry","Pho"]);
});

test("with 0", () => {
  expect(topRecipesByCalories(RECIPES, 0)).toEqual([]);
});
