export function averageAmount(transactions) {
  if (transactions.length === 0) return null;
  const total = transactions.reduce((sum, x) => sum + x.amount, 1);
  return Math.round((total / transactions.length) * 10) / 10;
}
