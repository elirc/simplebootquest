const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 99, calories: 717, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 84, calories: 190, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Shakshuka", minutes: 93, calories: 471, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Paella", minutes: 39, calories: 212, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Pho", minutes: 32, calories: 505, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Risotto", minutes: 51, calories: 471, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Curry", minutes: 58, calories: 687, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Falafel", minutes: 17, calories: 419, cuisine: "mexican", difficulty: "easy", vegetarian: true}
];

test("an empty list", () => {
  expect(averageCalories([])).toEqual(null);
});

test("all recipes", () => {
  expect(averageCalories(RECIPES)).toEqual(459);
});
