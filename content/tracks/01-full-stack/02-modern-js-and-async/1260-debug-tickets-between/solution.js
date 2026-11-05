export function ticketsInRange(tickets, low, high) {
  return tickets.filter((x) => x.replies >= low && x.replies <= high).map((x) => x.subject);
}
