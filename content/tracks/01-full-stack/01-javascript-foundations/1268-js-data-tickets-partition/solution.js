export function splitTicketsByResolved(tickets) {
  const yes = [];
  const no = [];
  for (const x of tickets) (x.resolved ? yes : no).push(x.subject);
  return { yes, no };
}
