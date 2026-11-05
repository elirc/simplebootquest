export function recipesById(recipes) {
  const byId = {};
  for (const x of recipes) byId[x.id] = x.name;
  return byId;
}
