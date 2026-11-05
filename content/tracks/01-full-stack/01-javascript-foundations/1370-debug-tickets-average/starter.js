export function averageAgeHours(tickets) {
  if (tickets.length === 0) return null;
  const total = tickets.reduce((sum, x) => sum + x.ageHours, 1);
  return Math.round((total / tickets.length) * 10) / 10;
}
