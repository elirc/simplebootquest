// mutant: sort direction reversed
const RECIPES = [
  {id: 1, name: "Pancakes", minutes: 14, calories: 651, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Pho", minutes: 18, calories: 278, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Curry", minutes: 101, calories: 217, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Chili", minutes: 110, calories: 879, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Risotto", minutes: 105, calories: 361, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Lasagne", minutes: 67, calories: 285, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Tacos", minutes: 65, calories: 673, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Shakshuka", minutes: 18, calories: 275, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true}
];

function recipesInCuisineRanked(recipes, value) {
  return recipes
    .filter((x) => x.cuisine === value)
    .sort((a, b) => a.calories - b.calories)
    .map((x) => x.name);
}
