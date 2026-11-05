const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 117, calories: 878, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Shakshuka", minutes: 19, calories: 231, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Paella", minutes: 108, calories: 582, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Curry", minutes: 16, calories: 331, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Chili", minutes: 44, calories: 891, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 75, calories: 536, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Falafel", minutes: 48, calories: 547, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Ramen", minutes: 114, calories: 949, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
];

test("an empty list", () => {
  expect(percentVegetarian([])).toEqual(0);
});

test("all recipes", () => {
  expect(percentVegetarian(RECIPES)).toEqual(50);
});
