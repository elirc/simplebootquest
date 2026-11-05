export function nthByDay(transactions, n) {
  const sorted = [...transactions].sort((a, b) => b.day - a.day);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].reference : null;
}
