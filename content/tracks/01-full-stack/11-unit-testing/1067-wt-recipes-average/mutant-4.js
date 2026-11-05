// mutant: reduce starts from 1 instead of 0
const RECIPES = [
  {id: 1, name: "Risotto", minutes: 58, calories: 316, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 2, name: "Lasagne", minutes: 11, calories: 213, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Curry", minutes: 115, calories: 414, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Ramen", minutes: 73, calories: 510, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Chili", minutes: 16, calories: 902, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 6, name: "Shakshuka", minutes: 80, calories: 909, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Pancakes", minutes: 37, calories: 899, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Pho", minutes: 42, calories: 216, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true}
];

function averageCalories(recipes) {
  if (recipes.length === 0) return null;
  const total = recipes.reduce((sum, x) => sum + x.calories, 1);
  return Math.round((total / recipes.length) * 10) / 10;
}
