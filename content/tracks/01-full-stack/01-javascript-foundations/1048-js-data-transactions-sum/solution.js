export function totalAmount(transactions) {
  return transactions.reduce((sum, x) => sum + x.amount, 0);
}
