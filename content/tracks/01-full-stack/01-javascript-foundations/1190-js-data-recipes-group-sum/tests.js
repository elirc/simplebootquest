const RECIPES = [
  {id: 1, name: "Pho", minutes: 68, calories: 631, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Gyoza", minutes: 29, calories: 411, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Pancakes", minutes: 105, calories: 505, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Curry", minutes: 12, calories: 897, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Ramen", minutes: 112, calories: 793, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Paella", minutes: 12, calories: 930, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Lasagne", minutes: 80, calories: 265, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Risotto", minutes: 60, calories: 426, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
];

test("an empty list", () => {
  expect(minutesPerCuisine([])).toEqual({});
});

test("all recipes", () => {
  expect(minutesPerCuisine(RECIPES)).toEqual({"middle-eastern":140,"mexican":109,"asian":105,"italian":124});
});
