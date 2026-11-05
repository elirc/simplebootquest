export function summariseTransactions(transactions) {
  return transactions.map(({ id, reference, day }) => ({ id, reference, day }));
}
