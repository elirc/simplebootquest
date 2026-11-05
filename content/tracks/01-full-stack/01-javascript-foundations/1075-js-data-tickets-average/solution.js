export function averageReplies(tickets) {
  if (tickets.length === 0) return null;
  const total = tickets.reduce((sum, x) => sum + x.replies, 0);
  return Math.round((total / tickets.length) * 10) / 10;
}
