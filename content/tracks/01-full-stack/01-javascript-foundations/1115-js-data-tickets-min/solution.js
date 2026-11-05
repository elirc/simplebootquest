export function lowestReplies(tickets) {
  let best = null;
  for (const x of tickets) if (best === null || x.replies < best.replies) best = x;
  return best ? best.subject : null;
}
