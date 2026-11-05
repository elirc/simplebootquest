export function pageOfTransactions(transactions, page, size) {
  const totalPages = Math.ceil(transactions.length / size);
  const items = transactions.slice((page - 1) * size, page * size).map((x) => x.reference);
  return { items, page, totalPages };
}
