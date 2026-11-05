// mutant: mutates the original objects
const RECIPES = [
  {id: 1, name: "Risotto", minutes: 100, calories: 242, cuisine: "asian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Pancakes", minutes: 57, calories: 216, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 3, name: "Shakshuka", minutes: 98, calories: 694, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Curry", minutes: 57, calories: 562, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Gyoza", minutes: 27, calories: 702, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Paella", minutes: 102, calories: 378, cuisine: "italian", difficulty: "medium", vegetarian: true},
  {id: 7, name: "Chili", minutes: 116, calories: 943, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Falafel", minutes: 14, calories: 529, cuisine: "middle-eastern", difficulty: "medium", vegetarian: true}
];

function bumpMinutes(recipes, value, amount) {
  return recipes.map((x) => (x.cuisine === value ? Object.assign(x, { minutes: x.minutes + amount } : x));
}
