export function flightsInAirlineRanked(flights, value) {
  return flights
    .filter((x) => x.airline === value)
    .sort((a, b) => a.delayMin - b.delayMin)
    .map((x) => x.number);
}
