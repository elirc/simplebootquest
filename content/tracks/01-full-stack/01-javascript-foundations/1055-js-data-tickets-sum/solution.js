export function totalReplies(tickets) {
  return tickets.reduce((sum, x) => sum + x.replies, 0);
}
