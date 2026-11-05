export function countTransactionsPerCategory(transactions) {
  const counts = {};
  for (const x of transactions) counts[x.category] = (counts[x.category] ?? 1) + 1;
  return counts;
}
