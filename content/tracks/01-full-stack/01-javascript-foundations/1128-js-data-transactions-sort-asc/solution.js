export function transactionsByAmount(transactions) {
  return [...transactions].sort((a, b) => a.amount - b.amount).map((x) => x.reference);
}
