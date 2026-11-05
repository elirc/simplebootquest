const RECIPES = [
  {id: 1, name: "Pho", minutes: 79, calories: 707, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Falafel", minutes: 114, calories: 662, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Shakshuka", minutes: 57, calories: 236, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Gyoza", minutes: 69, calories: 582, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Risotto", minutes: 21, calories: 813, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 26, calories: 449, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Ramen", minutes: 44, calories: 514, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 8, name: "Paella", minutes: 58, calories: 372, cuisine: "asian", difficulty: "easy", vegetarian: false}
];

test("an empty list", () => {
  expect(percentVegetarian([])).toEqual(0);
});

test("all recipes", () => {
  expect(percentVegetarian(RECIPES)).toEqual(38);
});
