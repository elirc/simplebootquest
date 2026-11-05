export function registeredOf(events, name) {
  const found = events.find((x) => x.name === name);
  return found ? found.registered : null;
}
