export function distinctFormats(events) {
  return [...new Set(events.map((x) => x.format))].sort();
}
