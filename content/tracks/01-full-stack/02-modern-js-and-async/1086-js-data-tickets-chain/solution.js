export function ticketsInChannelRanked(tickets, value) {
  return tickets
    .filter((x) => x.channel === value)
    .sort((a, b) => b.ageHours - a.ageHours)
    .map((x) => x.subject);
}
