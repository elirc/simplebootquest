const RECIPES = [
  {id: 1, name: "Paella", minutes: 107, calories: 881, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Ramen", minutes: 45, calories: 637, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Shakshuka", minutes: 120, calories: 297, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Falafel", minutes: 48, calories: 534, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Chili", minutes: 87, calories: 644, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Pho", minutes: 51, calories: 263, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Risotto", minutes: 69, calories: 640, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 78, calories: 858, cuisine: "mexican", difficulty: "medium", vegetarian: true}
];

test("with \"ha\"", () => {
  expect(searchRecipes(RECIPES, "ha")).toEqual(["Shakshuka"]);
});

test("with \"HA\"", () => {
  expect(searchRecipes(RECIPES, "HA")).toEqual(["Shakshuka"]);
});

test("with \"  \"", () => {
  expect(searchRecipes(RECIPES, "  ")).toEqual(["Paella","Ramen","Shakshuka","Falafel","Chili","Pho","Risotto","Tacos"]);
});

test("with \"zzz\"", () => {
  expect(searchRecipes(RECIPES, "zzz")).toEqual([]);
});
