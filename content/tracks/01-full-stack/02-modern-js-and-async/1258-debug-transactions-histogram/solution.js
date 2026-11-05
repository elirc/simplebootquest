export function amountHistogram(transactions, width) {
  const buckets = {};
  for (const x of transactions) {
    const key = Math.floor(x.amount / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
