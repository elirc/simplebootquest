export function bumpAmount(transactions, value, amount) {
  return transactions.map((x) => (x.category === value ? { ...x, amount: x.amount + amount } : x));
}
