export function transactionsInRange(transactions, low, high) {
  return transactions.filter((x) => x.amount >= low && x.amount <= high).map((x) => x.reference);
}
