export function citiesById(cities) {
  const byId = {};
  for (const x of cities) byId[x.id] = x.name;
  return byId;
}
