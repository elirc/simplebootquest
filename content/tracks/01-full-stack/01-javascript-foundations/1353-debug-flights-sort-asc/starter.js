export function flightsByDelayMin(flights) {
  return [...flights].sort((a, b) => b.delayMin - a.delayMin).map((x) => x.number);
}
