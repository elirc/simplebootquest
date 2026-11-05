export function allTransactionsUnder(transactions, limit) {
  return transactions.every((x) => x.day < limit);
}
