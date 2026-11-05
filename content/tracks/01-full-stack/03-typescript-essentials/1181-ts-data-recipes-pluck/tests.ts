const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 66, calories: 233, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Falafel", minutes: 108, calories: 437, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Risotto", minutes: 23, calories: 256, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Paella", minutes: 25, calories: 717, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Pancakes", minutes: 40, calories: 289, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 99, calories: 204, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Chili", minutes: 74, calories: 555, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Ramen", minutes: 85, calories: 667, cuisine: "italian", difficulty: "medium", vegetarian: true}
];

test("an empty list", () => {
  expect(summariseRecipes([])).toEqual([]);
});

test("all recipes", () => {
  expect(summariseRecipes(RECIPES)).toEqual([{"id":1,"name":"Shakshuka","minutes":66},{"id":2,"name":"Falafel","minutes":108},{"id":3,"name":"Risotto","minutes":23},{"id":4,"name":"Paella","minutes":25},{"id":5,"name":"Pancakes","minutes":40},{"id":6,"name":"Lasagne","minutes":99},{"id":7,"name":"Chili","minutes":74},{"id":8,"name":"Ramen","minutes":85}]);
});
