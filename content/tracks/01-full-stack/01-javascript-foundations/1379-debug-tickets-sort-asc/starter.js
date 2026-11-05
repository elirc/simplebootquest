export function ticketsByReplies(tickets) {
  return [...tickets].sort((a, b) => b.replies - a.replies).map((x) => x.subject);
}
