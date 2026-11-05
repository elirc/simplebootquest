const RECIPES = [
  {id: 1, name: "Ramen", minutes: 70, calories: 235, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 97, calories: 910, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Chili", minutes: 26, calories: 463, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Shakshuka", minutes: 117, calories: 306, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Paella", minutes: 71, calories: 233, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Gyoza", minutes: 104, calories: 456, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Tacos", minutes: 38, calories: 591, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Falafel", minutes: 84, calories: 888, cuisine: "mexican", difficulty: "hard", vegetarian: false}
];

test("an empty list", () => {
  expect(recipesById([])).toEqual({});
});

test("all recipes", () => {
  expect(recipesById(RECIPES)).toEqual({"1":"Ramen","2":"Lasagne","3":"Chili","4":"Shakshuka","5":"Paella","6":"Gyoza","7":"Tacos","8":"Falafel"});
});
