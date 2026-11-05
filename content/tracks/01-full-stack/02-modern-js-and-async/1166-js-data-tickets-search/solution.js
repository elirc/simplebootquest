export function searchTickets(tickets, query) {
  const q = query.trim().toLowerCase();
  return tickets.filter((x) => x.subject.toLowerCase().includes(q)).map((x) => x.subject);
}
