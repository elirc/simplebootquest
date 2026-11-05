export function describeTickets(tickets) {
  return tickets.map((x) => `${x.subject} (${x.replies})`);
}
