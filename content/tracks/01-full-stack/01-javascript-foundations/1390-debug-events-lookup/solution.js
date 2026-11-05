export function capacityOf(events, name) {
  const found = events.find((x) => x.name === name);
  return found ? found.capacity : null;
}
