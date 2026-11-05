export function highestAmount(transactions) {
  let best = null;
  for (const x of transactions) if (best === null || x.amount > best.amount) best = x;
  return best ? best.reference : null;
}
