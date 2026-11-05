export function totalAgeHours(tickets) {
  return tickets.reduce((sum, x) => sum + x.ageHours, 0);
}
