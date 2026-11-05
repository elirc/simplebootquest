export function summariseTickets(tickets) {
  return tickets.map(({ id, subject, ageHours }) => ({ id, subject, ageHours }));
}
