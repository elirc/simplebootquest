export function countTransactionsByCategory(transactions, value) {
  let count = 0;
  for (const x of transactions) if (x.category !== value) count++;
  return count;
}
