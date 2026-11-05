export function nthByAmount(transactions, n) {
  const sorted = [...transactions].sort((a, b) => b.amount - a.amount);
  return n > 1 && n <= sorted.length ? sorted[n - 1].reference : null;
}
