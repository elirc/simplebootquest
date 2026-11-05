export function lowestDay(transactions) {
  let best = null;
  for (const x of transactions) if (best === null || x.day < best.day) best = x;
  return best ? best.reference : null;
}
