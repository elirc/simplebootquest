const RECIPES = [
  {id: 1, name: "Tacos", minutes: 66, calories: 740, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Pancakes", minutes: 103, calories: 229, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Pho", minutes: 41, calories: 916, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Ramen", minutes: 35, calories: 210, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Falafel", minutes: 98, calories: 368, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Curry", minutes: 84, calories: 946, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Paella", minutes: 57, calories: 834, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Gyoza", minutes: 70, calories: 389, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

test("an empty list", () => {
  expect(averageCalories([])).toEqual(null);
});

test("all recipes", () => {
  expect(averageCalories(RECIPES)).toEqual(579);
});
