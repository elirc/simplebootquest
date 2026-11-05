export function ticketsByAgeHours(tickets) {
  return [...tickets].sort((a, b) => a.ageHours - b.ageHours).map((x) => x.subject);
}
