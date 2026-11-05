export function durationMinOf(flights, number) {
  const found = flights.find((x) => x.number === number);
  return found ? found.durationMin : null;
}
