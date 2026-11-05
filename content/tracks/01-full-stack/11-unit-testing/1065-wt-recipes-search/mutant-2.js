// mutant: input is no longer trimmed
const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 80, calories: 769, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 2, name: "Paella", minutes: 18, calories: 617, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Falafel", minutes: 81, calories: 230, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Shakshuka", minutes: 23, calories: 237, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Risotto", minutes: 27, calories: 281, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Pancakes", minutes: 16, calories: 363, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Ramen", minutes: 119, calories: 474, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Chili", minutes: 21, calories: 550, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true}
];

function searchRecipes(recipes, query) {
  const q = query.toLowerCase();
  return recipes.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
