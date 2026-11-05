const RECIPES = [
  {id: 1, name: "Pho", minutes: 90, calories: 229, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Paella", minutes: 72, calories: 667, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Pancakes", minutes: 57, calories: 300, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 4, name: "Gyoza", minutes: 89, calories: 275, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 5, name: "Risotto", minutes: 94, calories: 673, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Curry", minutes: 79, calories: 394, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Ramen", minutes: 15, calories: 526, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Shakshuka", minutes: 22, calories: 617, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false}
];

test("with 300, 526", () => {
  expect(recipesInRange(RECIPES, 300, 526)).toEqual(["Pancakes","Curry","Ramen"]);
});

test("with 526, 617", () => {
  expect(recipesInRange(RECIPES, 526, 617)).toEqual(["Ramen","Shakshuka"]);
});

test("with 300, 300", () => {
  expect(recipesInRange(RECIPES, 300, 300)).toEqual(["Pancakes"]);
});
