export function hotelsById(hotels) {
  const byId = {};
  for (const x of hotels) byId[x.id] = x.name;
  return byId;
}
