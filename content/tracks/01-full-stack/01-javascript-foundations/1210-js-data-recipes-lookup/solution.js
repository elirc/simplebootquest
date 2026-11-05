export function minutesOf(recipes, name) {
  const found = recipes.find((x) => x.name === name);
  return found ? found.minutes : null;
}
