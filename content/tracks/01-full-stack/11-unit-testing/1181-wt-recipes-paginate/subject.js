const RECIPES = [
  {id: 1, name: "Risotto", minutes: 73, calories: 673, cuisine: "middle-eastern", difficulty: "hard", vegetarian: true},
  {id: 2, name: "Lasagne", minutes: 92, calories: 838, cuisine: "middle-eastern", difficulty: "easy", vegetarian: false},
  {id: 3, name: "Gyoza", minutes: 22, calories: 428, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 4, name: "Pancakes", minutes: 115, calories: 832, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Tacos", minutes: 17, calories: 451, cuisine: "italian", difficulty: "hard", vegetarian: false},
  {id: 6, name: "Paella", minutes: 108, calories: 374, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 7, name: "Falafel", minutes: 38, calories: 527, cuisine: "italian", difficulty: "hard", vegetarian: true},
  {id: 8, name: "Curry", minutes: 32, calories: 586, cuisine: "italian", difficulty: "hard", vegetarian: false}
];

function pageOfRecipes(recipes, page, size) {
  const totalPages = Math.ceil(recipes.length / size);
  const items = recipes.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
