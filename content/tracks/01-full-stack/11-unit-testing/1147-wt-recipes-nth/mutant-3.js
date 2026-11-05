// mutant: off-by-one in the index
const RECIPES = [
  {id: 1, name: "Falafel", minutes: 76, calories: 415, cuisine: "mexican", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Paella", minutes: 74, calories: 763, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 3, name: "Risotto", minutes: 38, calories: 600, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Shakshuka", minutes: 26, calories: 949, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 5, name: "Gyoza", minutes: 62, calories: 529, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Curry", minutes: 53, calories: 897, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 7, name: "Ramen", minutes: 24, calories: 276, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Pho", minutes: 39, calories: 894, cuisine: "asian", difficulty: "medium", vegetarian: true}
];

function nthByCalories(recipes, n) {
  const sorted = [...recipes].sort((a, b) => b.calories - a.calories);
  return n >= 1 && n <= sorted.length ? sorted[n].name : null;
}
