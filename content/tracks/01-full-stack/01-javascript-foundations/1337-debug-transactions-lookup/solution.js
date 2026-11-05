export function amountOf(transactions, reference) {
  const found = transactions.find((x) => x.reference === reference);
  return found ? found.amount : null;
}
