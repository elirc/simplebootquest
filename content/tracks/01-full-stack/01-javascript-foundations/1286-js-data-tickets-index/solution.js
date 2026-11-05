export function ticketsById(tickets) {
  const byId = {};
  for (const x of tickets) byId[x.id] = x.subject;
  return byId;
}
