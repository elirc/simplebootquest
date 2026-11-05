export function countTicketsPerChannel(tickets) {
  const counts = {};
  for (const x of tickets) counts[x.channel] = (counts[x.channel] ?? 0) + 1;
  return counts;
}
