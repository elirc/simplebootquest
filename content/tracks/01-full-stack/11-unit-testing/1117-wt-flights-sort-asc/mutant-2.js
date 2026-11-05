// mutant: sorts (mutates) the input array in place
const FLIGHTS = [
  {id: 1, number: "DL15", durationMin: 214, delayMin: 77, seats: 17, airline: "skyteam"},
  {id: 2, number: "SQ25", durationMin: 784, delayMin: 101, seats: 26, airline: "star"},
  {id: 3, number: "BA117", durationMin: 513, delayMin: 49, seats: 38, airline: "star"},
  {id: 4, number: "EK3", durationMin: 556, delayMin: 51, seats: 19, airline: "star"},
  {id: 5, number: "TK1", durationMin: 768, delayMin: 47, seats: 30, airline: "skyteam"},
  {id: 6, number: "IB6251", durationMin: 620, delayMin: 163, seats: 11, airline: "star"},
  {id: 7, number: "KL641", durationMin: 781, delayMin: 94, seats: 10, airline: "star"},
  {id: 8, number: "AF22", durationMin: 520, delayMin: 38, seats: 11, airline: "skyteam"}
];

function flightsByDelayMin(flights) {
  return flights.sort((a, b) => a.delayMin - b.delayMin).map((x) => x.number);
}
