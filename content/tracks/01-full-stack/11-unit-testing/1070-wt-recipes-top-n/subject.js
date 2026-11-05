const RECIPES = [
  {id: 1, name: "Chili", minutes: 83, calories: 329, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Falafel", minutes: 49, calories: 938, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 3, name: "Pho", minutes: 107, calories: 681, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Tacos", minutes: 13, calories: 675, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Curry", minutes: 47, calories: 528, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 6, name: "Paella", minutes: 72, calories: 940, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Ramen", minutes: 69, calories: 338, cuisine: "asian", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Shakshuka", minutes: 70, calories: 660, cuisine: "middle-eastern", difficulty: "medium", vegetarian: false}
];

function topRecipesByMinutes(recipes, n) {
  return [...recipes].sort((a, b) => b.minutes - a.minutes).slice(0, n).map((x) => x.name);
}
