const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 114, calories: 204, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Risotto", minutes: 111, calories: 933, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Pancakes", minutes: 12, calories: 382, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Lasagne", minutes: 34, calories: 547, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Gyoza", minutes: 18, calories: 844, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Curry", minutes: 37, calories: 430, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Chili", minutes: 105, calories: 649, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Falafel", minutes: 62, calories: 263, cuisine: "asian", difficulty: "hard", vegetarian: false}
];

test("an empty list", () => {
  expect(splitRecipesByVegetarian([])).toEqual({"yes":[],"no":[]});
});

test("all recipes", () => {
  expect(splitRecipesByVegetarian(RECIPES)).toEqual({"yes":["Risotto","Pancakes","Gyoza","Chili"],"no":["Shakshuka","Lasagne","Curry","Falafel"]});
});
