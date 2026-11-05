export function describeTransactions(transactions) {
  return transactions.map((x) => `${x.reference} (${x.day})`);
}
