export function percentResolved(tickets) {
  if (tickets.length === 0) return 0;
  return Math.round((tickets.filter((x) => x.resolved).length / tickets.length) * 100);
}
