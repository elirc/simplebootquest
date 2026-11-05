const RECIPES = [
  {id: 1, name: "Paella", minutes: 32, calories: 277, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 83, calories: 767, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Lasagne", minutes: 43, calories: 324, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Falafel", minutes: 105, calories: 401, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Shakshuka", minutes: 36, calories: 865, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 107, calories: 220, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Ramen", minutes: 93, calories: 874, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Chili", minutes: 54, calories: 462, cuisine: "mexican", difficulty: "hard", vegetarian: true}
];

test("with 43", () => {
  expect(recipesAbove(RECIPES, 43)).toEqual(["Risotto","Falafel","Tacos","Ramen","Chili"]);
});

test("with 83", () => {
  expect(recipesAbove(RECIPES, 83)).toEqual(["Falafel","Tacos","Ramen"]);
});

test("with 999999", () => {
  expect(recipesAbove(RECIPES, 999999)).toEqual([]);
});
