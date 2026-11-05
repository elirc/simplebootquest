const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 15, calories: 855, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Tacos", minutes: 61, calories: 366, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Chili", minutes: 13, calories: 761, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Pho", minutes: 101, calories: 279, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Gyoza", minutes: 116, calories: 793, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Pancakes", minutes: 46, calories: 512, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Paella", minutes: 91, calories: 679, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Ramen", minutes: 16, calories: 326, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true}
];

test("an empty list", () => {
  expect(highestMinutes([])).toEqual(null);
});

test("all recipes", () => {
  expect(highestMinutes(RECIPES)).toEqual("Gyoza");
});
