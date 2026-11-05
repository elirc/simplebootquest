export function topFlightsByDurationMin(flights, n) {
  return [...flights].sort((a, b) => b.durationMin - a.durationMin).slice(0, n).map((x) => x.number);
}
