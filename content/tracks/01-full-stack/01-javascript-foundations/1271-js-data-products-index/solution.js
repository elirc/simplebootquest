export function productsById(products) {
  const byId = {};
  for (const x of products) byId[x.id] = x.name;
  return byId;
}
