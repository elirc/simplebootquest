export function pageOfRecipes(recipes, page, size) {
  const totalPages = Math.ceil(recipes.length / size);
  const items = recipes.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
