export function ticketsAbove(tickets, min) {
  return tickets.filter((x) => x.replies > min).map((x) => x.subject);
}
