export function ticketsInRange(tickets, low, high) {
  return tickets.filter((x) => x.ageHours >= low && x.ageHours <= high).map((x) => x.subject);
}
