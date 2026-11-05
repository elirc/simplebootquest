export function searchEvents(events, query) {
  const q = query.trim().toLowerCase();
  return events.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
