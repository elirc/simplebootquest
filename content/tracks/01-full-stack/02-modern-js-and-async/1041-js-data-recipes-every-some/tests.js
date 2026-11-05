const RECIPES = [
  {id: 1, name: "Falafel", minutes: 90, calories: 320, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Gyoza", minutes: 18, calories: 181, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Paella", minutes: 21, calories: 676, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 80, calories: 405, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Pho", minutes: 50, calories: 678, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Ramen", minutes: 45, calories: 805, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Curry", minutes: 53, calories: 802, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Tacos", minutes: 63, calories: 487, cuisine: "italian", difficulty: "medium", vegetarian: true}
];

test("with 405", () => {
  expect(allRecipesUnder(RECIPES, 405)).toEqual(false);
});

test("with 806", () => {
  expect(allRecipesUnder(RECIPES, 806)).toEqual(true);
});

test("with 805", () => {
  expect(allRecipesUnder(RECIPES, 805)).toEqual(false);
});
