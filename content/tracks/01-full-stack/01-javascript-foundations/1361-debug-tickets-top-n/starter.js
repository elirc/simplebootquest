export function topTicketsByReplies(tickets, n) {
  return [...tickets].sort((a, b) => a.replies - b.replies).slice(0, n).map((x) => x.subject);
}
