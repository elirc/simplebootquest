export function repliesOf(tickets, subject) {
  const found = tickets.find((x) => x.subject === subject);
  return found ? found.replies : null;
}
