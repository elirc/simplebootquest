export function ticketsAbove(tickets, min) {
  return tickets.filter((x) => x.ageHours > min).map((x) => x.subject);
}
