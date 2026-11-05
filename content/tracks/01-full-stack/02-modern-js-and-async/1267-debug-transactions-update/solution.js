export function bumpDay(transactions, value, amount) {
  return transactions.map((x) => (x.category === value ? { ...x, day: x.day + amount } : x));
}
