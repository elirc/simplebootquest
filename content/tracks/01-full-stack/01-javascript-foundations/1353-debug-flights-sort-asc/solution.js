export function flightsByDelayMin(flights) {
  return [...flights].sort((a, b) => a.delayMin - b.delayMin).map((x) => x.number);
}
