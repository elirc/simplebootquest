const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 38, calories: 345, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Tacos", minutes: 83, calories: 791, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Gyoza", minutes: 13, calories: 451, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Chili", minutes: 94, calories: 630, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Ramen", minutes: 41, calories: 751, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Curry", minutes: 21, calories: 659, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Lasagne", minutes: 25, calories: 409, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Falafel", minutes: 90, calories: 818, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false}
];

test("with 1, 3", () => {
  expect(pageOfRecipes(RECIPES, 1, 3)).toEqual({"items":["Shakshuka","Tacos","Gyoza"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfRecipes(RECIPES, 2, 3)).toEqual({"items":["Chili","Ramen","Curry"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfRecipes(RECIPES, 3, 3)).toEqual({"items":["Lasagne","Falafel"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfRecipes(RECIPES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
