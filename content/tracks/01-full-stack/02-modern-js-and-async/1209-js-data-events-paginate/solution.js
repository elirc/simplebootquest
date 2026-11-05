export function pageOfEvents(events, page, size) {
  const totalPages = Math.ceil(events.length / size);
  const items = events.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
