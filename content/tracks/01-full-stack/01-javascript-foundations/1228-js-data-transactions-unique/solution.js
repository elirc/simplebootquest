export function distinctCategorys(transactions) {
  return [...new Set(transactions.map((x) => x.category))].sort();
}
