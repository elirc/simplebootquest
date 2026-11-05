export function allEventsUnder(events, limit) {
  return events.every((x) => x.registered < limit);
}
