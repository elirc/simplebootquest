export function summariseFlights(flights) {
  return flights.map(({ id, number, delayMin }) => ({ id, number, delayMin }));
}
