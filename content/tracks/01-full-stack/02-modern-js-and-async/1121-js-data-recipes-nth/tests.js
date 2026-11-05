const RECIPES = [
  {id: 1, name: "Chili", minutes: 93, calories: 217, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Gyoza", minutes: 116, calories: 758, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Risotto", minutes: 66, calories: 470, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 71, calories: 253, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Tacos", minutes: 87, calories: 726, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Paella", minutes: 63, calories: 559, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Curry", minutes: 38, calories: 634, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Pho", minutes: 99, calories: 946, cuisine: "asian", difficulty: "medium", vegetarian: true}
];

test("with 1", () => {
  expect(nthByMinutes(RECIPES, 1)).toEqual("Gyoza");
});

test("with 2", () => {
  expect(nthByMinutes(RECIPES, 2)).toEqual("Pho");
});

test("with 5", () => {
  expect(nthByMinutes(RECIPES, 5)).toEqual("Shakshuka");
});

test("with 0", () => {
  expect(nthByMinutes(RECIPES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByMinutes(RECIPES, 99)).toEqual(null);
});
