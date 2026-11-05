export function bumpMinutes(recipes, value, amount) {
  return recipes.map((x) => (x.difficulty !== value ? { ...x, minutes: x.minutes + amount } : x));
}
