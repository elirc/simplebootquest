export function nthByAgeHours(tickets, n) {
  const sorted = [...tickets].sort((a, b) => b.ageHours - a.ageHours);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].subject : null;
}
