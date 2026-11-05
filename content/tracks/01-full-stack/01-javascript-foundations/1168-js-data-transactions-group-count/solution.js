export function countTransactionsPerCategory(transactions) {
  const counts = {};
  for (const x of transactions) counts[x.category] = (counts[x.category] ?? 0) + 1;
  return counts;
}
