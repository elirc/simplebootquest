export function transactionsById(transactions) {
  const byId = {};
  for (const x of transactions) byId[x.id] = x.reference;
  return byId;
}
