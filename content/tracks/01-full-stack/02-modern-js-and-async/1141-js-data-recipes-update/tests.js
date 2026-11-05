const RECIPES = [
  {id: 1, name: "Paella", minutes: 96, calories: 297, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 18, calories: 604, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Falafel", minutes: 15, calories: 821, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Curry", minutes: 65, calories: 693, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Risotto", minutes: 63, calories: 215, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Pancakes", minutes: 55, calories: 341, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Gyoza", minutes: 83, calories: 843, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 64, calories: 941, cuisine: "italian", difficulty: "hard", vegetarian: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(RECIPES);
  bumpCalories(RECIPES, "italian", 10);
  expect(JSON.stringify(RECIPES)).toBe(before);
});

test("with \"italian\", 10", () => {
  expect(bumpCalories(RECIPES, "italian", 10)).toEqual([{"id":1,"name":"Paella","minutes":96,"calories":297,"cuisine":"middle-eastern","difficulty":"easy","vegetarian":true},{"id":2,"name":"Lasagne","minutes":18,"calories":614,"cuisine":"italian","difficulty":"medium","vegetarian":true},{"id":3,"name":"Falafel","minutes":15,"calories":831,"cuisine":"italian","difficulty":"hard","vegetarian":false},{"id":4,"name":"Curry","minutes":65,"calories":693,"cuisine":"mexican","difficulty":"hard","vegetarian":true},{"id":5,"name":"Risotto","minutes":63,"calories":225,"cuisine":"italian","difficulty":"hard","vegetarian":false},{"id":6,"name":"Pancakes","minutes":55,"calories":341,"cuisine":"asian","difficulty":"medium","vegetarian":true},{"id":7,"name":"Gyoza","minutes":83,"calories":843,"cuisine":"middle-eastern","difficulty":"medium","vegetarian":true},{"id":8,"name":"Tacos","minutes":64,"calories":951,"cuisine":"italian","difficulty":"hard","vegetarian":false}]);
});

test("with \"asian\", 1", () => {
  expect(bumpCalories(RECIPES, "asian", 1)).toEqual([{"id":1,"name":"Paella","minutes":96,"calories":297,"cuisine":"middle-eastern","difficulty":"easy","vegetarian":true},{"id":2,"name":"Lasagne","minutes":18,"calories":604,"cuisine":"italian","difficulty":"medium","vegetarian":true},{"id":3,"name":"Falafel","minutes":15,"calories":821,"cuisine":"italian","difficulty":"hard","vegetarian":false},{"id":4,"name":"Curry","minutes":65,"calories":693,"cuisine":"mexican","difficulty":"hard","vegetarian":true},{"id":5,"name":"Risotto","minutes":63,"calories":215,"cuisine":"italian","difficulty":"hard","vegetarian":false},{"id":6,"name":"Pancakes","minutes":55,"calories":342,"cuisine":"asian","difficulty":"medium","vegetarian":true},{"id":7,"name":"Gyoza","minutes":83,"calories":843,"cuisine":"middle-eastern","difficulty":"medium","vegetarian":true},{"id":8,"name":"Tacos","minutes":64,"calories":941,"cuisine":"italian","difficulty":"hard","vegetarian":false}]);
});
