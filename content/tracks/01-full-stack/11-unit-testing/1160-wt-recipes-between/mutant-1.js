// mutant: boundary: `>=` became `>`
const RECIPES = [
  {id: 1, name: "Falafel", minutes: 48, calories: 454, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Curry", minutes: 71, calories: 330, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Chili", minutes: 31, calories: 629, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Pancakes", minutes: 104, calories: 716, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 5, name: "Pho", minutes: 45, calories: 713, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Gyoza", minutes: 93, calories: 548, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Ramen", minutes: 28, calories: 240, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Shakshuka", minutes: 48, calories: 485, cuisine: "italian", difficulty: "easy", vegetarian: true}
];

function recipesInRange(recipes, low, high) {
  return recipes.filter((x) => x.minutes > low && x.minutes <= high).map((x) => x.name);
}
