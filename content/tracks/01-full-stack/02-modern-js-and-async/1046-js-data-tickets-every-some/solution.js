export function allTicketsUnder(tickets, limit) {
  return tickets.every((x) => x.replies < limit);
}
