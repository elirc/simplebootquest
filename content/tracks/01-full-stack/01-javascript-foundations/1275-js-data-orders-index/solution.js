export function ordersById(orders) {
  const byId = {};
  for (const x of orders) byId[x.id] = x.code;
  return byId;
}
