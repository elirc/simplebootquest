// mutant: sort direction reversed
const RECIPES = [
  {id: 1, name: "Falafel", minutes: 67, calories: 836, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Pho", minutes: 120, calories: 521, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Gyoza", minutes: 43, calories: 781, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Curry", minutes: 57, calories: 699, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Tacos", minutes: 112, calories: 737, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 6, name: "Risotto", minutes: 64, calories: 525, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Pancakes", minutes: 86, calories: 649, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 8, name: "Ramen", minutes: 30, calories: 926, cuisine: "italian", difficulty: "medium", vegetarian: false}
];

function recipesByMinutes(recipes) {
  return [...recipes].sort((a, b) => b.minutes - a.minutes).map((x) => x.name);
}
