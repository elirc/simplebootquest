export function topTransactionsByDay(transactions, n) {
  return [...transactions].sort((a, b) => b.day - a.day).slice(0, n).map((x) => x.reference);
}
