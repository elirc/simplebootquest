export function searchTransactions(transactions, query) {
  const q = query.trim().toLowerCase();
  return transactions.filter((x) => x.reference.toLowerCase().includes(q)).map((x) => x.reference);
}
