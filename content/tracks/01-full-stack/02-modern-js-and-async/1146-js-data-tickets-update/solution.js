export function bumpAgeHours(tickets, value, amount) {
  return tickets.map((x) => (x.priority === value ? { ...x, ageHours: x.ageHours + amount } : x));
}
