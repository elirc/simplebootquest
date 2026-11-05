export function topFlightsByDurationMin(flights, n) {
  return [...flights].sort((a, b) => a.durationMin - b.durationMin).slice(0, n).map((x) => x.number);
}
