const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 35, calories: 196, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Chili", minutes: 56, calories: 824, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Curry", minutes: 10, calories: 419, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Ramen", minutes: 61, calories: 390, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Falafel", minutes: 54, calories: 428, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Lasagne", minutes: 77, calories: 231, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 7, name: "Shakshuka", minutes: 62, calories: 189, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Tacos", minutes: 56, calories: 827, cuisine: "italian", difficulty: "medium", vegetarian: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(RECIPES);
  bumpMinutes(RECIPES, "easy", 10);
  expect(JSON.stringify(RECIPES)).toBe(before);
});

test("with \"easy\", 10", () => {
  expect(bumpMinutes(RECIPES, "easy", 10)).toEqual([{"id":1,"name":"Gyoza","minutes":35,"calories":196,"cuisine":"italian","difficulty":"hard","vegetarian":false},{"id":2,"name":"Chili","minutes":56,"calories":824,"cuisine":"italian","difficulty":"medium","vegetarian":false},{"id":3,"name":"Curry","minutes":20,"calories":419,"cuisine":"middle-eastern","difficulty":"easy","vegetarian":false},{"id":4,"name":"Ramen","minutes":71,"calories":390,"cuisine":"asian","difficulty":"easy","vegetarian":true},{"id":5,"name":"Falafel","minutes":64,"calories":428,"cuisine":"italian","difficulty":"easy","vegetarian":false},{"id":6,"name":"Lasagne","minutes":77,"calories":231,"cuisine":"italian","difficulty":"medium","vegetarian":false},{"id":7,"name":"Shakshuka","minutes":72,"calories":189,"cuisine":"asian","difficulty":"easy","vegetarian":false},{"id":8,"name":"Tacos","minutes":56,"calories":827,"cuisine":"italian","difficulty":"medium","vegetarian":false}]);
});

test("with \"medium\", 1", () => {
  expect(bumpMinutes(RECIPES, "medium", 1)).toEqual([{"id":1,"name":"Gyoza","minutes":35,"calories":196,"cuisine":"italian","difficulty":"hard","vegetarian":false},{"id":2,"name":"Chili","minutes":57,"calories":824,"cuisine":"italian","difficulty":"medium","vegetarian":false},{"id":3,"name":"Curry","minutes":10,"calories":419,"cuisine":"middle-eastern","difficulty":"easy","vegetarian":false},{"id":4,"name":"Ramen","minutes":61,"calories":390,"cuisine":"asian","difficulty":"easy","vegetarian":true},{"id":5,"name":"Falafel","minutes":54,"calories":428,"cuisine":"italian","difficulty":"easy","vegetarian":false},{"id":6,"name":"Lasagne","minutes":78,"calories":231,"cuisine":"italian","difficulty":"medium","vegetarian":false},{"id":7,"name":"Shakshuka","minutes":62,"calories":189,"cuisine":"asian","difficulty":"easy","vegetarian":false},{"id":8,"name":"Tacos","minutes":57,"calories":827,"cuisine":"italian","difficulty":"medium","vegetarian":false}]);
});
