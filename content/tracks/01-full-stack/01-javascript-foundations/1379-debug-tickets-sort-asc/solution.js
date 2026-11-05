export function ticketsByReplies(tickets) {
  return [...tickets].sort((a, b) => a.replies - b.replies).map((x) => x.subject);
}
