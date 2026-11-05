export function bumpDurationMin(flights, value, amount) {
  return flights.map((x) => (x.airline === value ? { ...x, durationMin: x.durationMin + amount } : x));
}
