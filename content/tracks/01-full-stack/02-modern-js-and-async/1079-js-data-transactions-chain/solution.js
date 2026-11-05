export function transactionsInCategoryRanked(transactions, value) {
  return transactions
    .filter((x) => x.category === value)
    .sort((a, b) => b.day - a.day)
    .map((x) => x.reference);
}
