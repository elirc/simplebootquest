const RECIPES = [
  {id: 1, name: "Ramen", minutes: 85, calories: 610, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Curry", minutes: 77, calories: 732, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Shakshuka", minutes: 55, calories: 187, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Paella", minutes: 35, calories: 515, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Lasagne", minutes: 57, calories: 699, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Tacos", minutes: 97, calories: 192, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Pho", minutes: 59, calories: 847, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Chili", minutes: 77, calories: 228, cuisine: "asian", difficulty: "medium", vegetarian: true}
];

test("an empty list", () => {
  expect(totalMinutes([])).toEqual(0);
});

test("all recipes", () => {
  expect(totalMinutes(RECIPES)).toEqual(542);
});
