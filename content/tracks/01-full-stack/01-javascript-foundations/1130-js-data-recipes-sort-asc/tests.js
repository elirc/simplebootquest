const RECIPES = [
  {id: 1, name: "Shakshuka", minutes: 100, calories: 741, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Pancakes", minutes: 16, calories: 602, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Falafel", minutes: 57, calories: 723, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Lasagne", minutes: 72, calories: 738, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Gyoza", minutes: 27, calories: 191, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Curry", minutes: 107, calories: 765, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Pho", minutes: 91, calories: 725, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Tacos", minutes: 55, calories: 488, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(RECIPES);
  recipesByCalories(RECIPES);
  expect(JSON.stringify(RECIPES)).toBe(before);
});

test("all recipes", () => {
  expect(recipesByCalories(RECIPES)).toEqual(["Gyoza","Tacos","Pancakes","Falafel","Pho","Lasagne","Shakshuka","Curry"]);
});
