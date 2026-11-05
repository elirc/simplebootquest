export function countTicketsByPriority(tickets, value) {
  let count = 0;
  for (const x of tickets) if (x.priority !== value) count++;
  return count;
}
