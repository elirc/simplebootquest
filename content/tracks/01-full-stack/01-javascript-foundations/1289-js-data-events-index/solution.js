export function eventsById(events) {
  const byId = {};
  for (const x of events) byId[x.id] = x.name;
  return byId;
}
