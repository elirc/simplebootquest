export function pageOfTickets(tickets, page, size) {
  const totalPages = Math.ceil(tickets.length / size);
  const items = tickets.slice((page - 1) * size, page * size).map((x) => x.subject);
  return { items, page, totalPages };
}
