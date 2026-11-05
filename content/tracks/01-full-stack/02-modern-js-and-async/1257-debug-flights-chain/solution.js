export function flightsInAirlineRanked(flights, value) {
  return flights
    .filter((x) => x.airline === value)
    .sort((a, b) => b.delayMin - a.delayMin)
    .map((x) => x.number);
}
