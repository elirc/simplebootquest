export function transactionsInRange(transactions, low, high) {
  return transactions.filter((x) => x.day >= low && x.day <= high).map((x) => x.reference);
}
