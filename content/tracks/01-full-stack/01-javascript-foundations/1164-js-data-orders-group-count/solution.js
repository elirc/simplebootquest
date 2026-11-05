export function countOrdersPerCountry(orders) {
  const counts = {};
  for (const x of orders) counts[x.country] = (counts[x.country] ?? 0) + 1;
  return counts;
}
