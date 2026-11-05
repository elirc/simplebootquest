export function searchRecipes(recipes, query) {
  const q = query.trim().toLowerCase();
  return recipes.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
