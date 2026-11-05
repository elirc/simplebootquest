const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 54, calories: 333, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 56, calories: 441, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Paella", minutes: 40, calories: 816, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Pancakes", minutes: 112, calories: 318, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Curry", minutes: 31, calories: 328, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Ramen", minutes: 107, calories: 884, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Tacos", minutes: 110, calories: 333, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Pho", minutes: 78, calories: 302, cuisine: "italian", difficulty: "easy", vegetarian: false}
];

test("with 30", () => {
  expect(minutesHistogram(RECIPES, 30)).toEqual({"30":4,"60":1,"90":3});
});

test("with 60", () => {
  expect(minutesHistogram(RECIPES, 60)).toEqual({"0":4,"60":4});
});
