export function splitEventsByFree(events) {
  const yes = [];
  const no = [];
  for (const x of events) (x.free ? yes : no).push(x.name);
  return { yes, no };
}
