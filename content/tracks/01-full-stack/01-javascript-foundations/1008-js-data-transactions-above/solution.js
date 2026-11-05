export function transactionsAbove(transactions, min) {
  return transactions.filter((x) => x.amount > min).map((x) => x.reference);
}
