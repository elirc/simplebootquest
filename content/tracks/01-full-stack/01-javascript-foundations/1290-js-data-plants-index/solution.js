export function plantsById(plants) {
  const byId = {};
  for (const x of plants) byId[x.id] = x.name;
  return byId;
}
