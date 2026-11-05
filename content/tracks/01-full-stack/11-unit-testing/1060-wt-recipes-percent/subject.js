const RECIPES = [
  {id: 1, name: "Gyoza", minutes: 83, calories: 313, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 2, name: "Risotto", minutes: 92, calories: 515, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Chili", minutes: 41, calories: 406, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 4, name: "Pho", minutes: 41, calories: 914, cuisine: "asian", difficulty: "easy", vegetarian: false},
  {id: 5, name: "Curry", minutes: 28, calories: 393, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Tacos", minutes: 83, calories: 727, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 7, name: "Falafel", minutes: 40, calories: 862, cuisine: "italian", difficulty: "easy", vegetarian: false},
  {id: 8, name: "Lasagne", minutes: 19, calories: 491, cuisine: "asian", difficulty: "easy", vegetarian: false}
];

function percentVegetarian(recipes) {
  if (recipes.length === 0) return 0;
  return Math.round((recipes.filter((x) => x.vegetarian).length / recipes.length) * 100);
}
