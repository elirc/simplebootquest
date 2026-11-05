export function recipesInDifficultyRanked(recipes, value) {
  return recipes
    .filter((x) => x.difficulty === value)
    .sort((a, b) => b.calories - a.calories)
    .map((x) => x.name);
}
