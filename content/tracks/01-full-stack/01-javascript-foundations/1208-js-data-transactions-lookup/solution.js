export function dayOf(transactions, reference) {
  const found = transactions.find((x) => x.reference === reference);
  return found ? found.day : null;
}
