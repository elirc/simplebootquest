export function eventsInFormatRanked(events, value) {
  return events
    .filter((x) => x.format === value)
    .sort((a, b) => b.capacity - a.capacity)
    .map((x) => x.name);
}
