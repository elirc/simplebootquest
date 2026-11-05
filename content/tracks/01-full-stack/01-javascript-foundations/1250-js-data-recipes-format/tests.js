const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 61, calories: 684, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Paella", minutes: 107, calories: 182, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Pho", minutes: 28, calories: 613, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Ramen", minutes: 118, calories: 356, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Tacos", minutes: 44, calories: 504, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Curry", minutes: 29, calories: 455, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Falafel", minutes: 63, calories: 931, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Chili", minutes: 77, calories: 853, cuisine: "italian", difficulty: "easy", vegetarian: true}
];

test("an empty list", () => {
  expect(describeRecipes([])).toEqual([]);
});

test("all recipes", () => {
  expect(describeRecipes(RECIPES)).toEqual(["Pancakes (684)","Paella (182)","Pho (613)","Ramen (356)","Tacos (504)","Curry (455)","Falafel (931)","Chili (853)"]);
});
