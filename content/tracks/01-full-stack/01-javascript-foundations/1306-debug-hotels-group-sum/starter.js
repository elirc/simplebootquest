export function starsPerCity(hotels) {
  const totals = {};
  for (const x of hotels) totals[x.city] = (totals[x.city] ?? 1) + x.stars;
  return totals;
}
