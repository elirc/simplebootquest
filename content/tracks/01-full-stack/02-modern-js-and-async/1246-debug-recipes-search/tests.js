const RECIPES = [
  {id: 1, name: "Ramen", minutes: 71, calories: 926, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Chili", minutes: 38, calories: 392, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Pho", minutes: 74, calories: 299, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Pancakes", minutes: 118, calories: 802, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Gyoza", minutes: 52, calories: 895, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 24, calories: 474, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Risotto", minutes: 31, calories: 284, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Curry", minutes: 63, calories: 514, cuisine: "mexican", difficulty: "easy", vegetarian: true}
];

test("with \"is\"", () => {
  expect(searchRecipes(RECIPES, "is")).toEqual(["Risotto"]);
});

test("with \"IS\"", () => {
  expect(searchRecipes(RECIPES, "IS")).toEqual(["Risotto"]);
});

test("with \"  \"", () => {
  expect(searchRecipes(RECIPES, "  ")).toEqual(["Ramen","Chili","Pho","Pancakes","Gyoza","Tacos","Risotto","Curry"]);
});

test("with \"zzz\"", () => {
  expect(searchRecipes(RECIPES, "zzz")).toEqual([]);
});
