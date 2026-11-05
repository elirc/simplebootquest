const RECIPES = [
  {id: 1, name: "Curry", minutes: 72, calories: 381, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Shakshuka", minutes: 45, calories: 947, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Falafel", minutes: 70, calories: 657, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Ramen", minutes: 57, calories: 364, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Pancakes", minutes: 113, calories: 665, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Gyoza", minutes: 88, calories: 269, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Lasagne", minutes: 49, calories: 383, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 8, name: "Pho", minutes: 116, calories: 796, cuisine: "mexican", difficulty: "medium", vegetarian: false}
];

test("an empty list", () => {
  expect(summariseRecipes([])).toEqual([]);
});

test("all recipes", () => {
  expect(summariseRecipes(RECIPES)).toEqual([{"id":1,"name":"Curry","minutes":72},{"id":2,"name":"Shakshuka","minutes":45},{"id":3,"name":"Falafel","minutes":70},{"id":4,"name":"Ramen","minutes":57},{"id":5,"name":"Pancakes","minutes":113},{"id":6,"name":"Gyoza","minutes":88},{"id":7,"name":"Lasagne","minutes":49},{"id":8,"name":"Pho","minutes":116}]);
});
