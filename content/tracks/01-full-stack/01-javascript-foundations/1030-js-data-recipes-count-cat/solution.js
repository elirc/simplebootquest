export function countRecipesByDifficulty(recipes, value) {
  let count = 0;
  for (const x of recipes) if (x.difficulty === value) count++;
  return count;
}
