export function countHotelsPerCity(hotels) {
  const counts = {};
  for (const x of hotels) counts[x.city] = (counts[x.city] ?? 0) + 1;
  return counts;
}
