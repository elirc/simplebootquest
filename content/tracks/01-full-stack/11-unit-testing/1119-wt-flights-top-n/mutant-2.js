// mutant: off-by-one in slice
const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 475, delayMin: 51, seats: 16, airline: "oneworld"},
  {id: 2, number: "KL641", durationMin: 576, delayMin: 87, seats: 1, airline: "skyteam"},
  {id: 3, number: "TK1", durationMin: 145, delayMin: 161, seats: 41, airline: "oneworld"},
  {id: 4, number: "SQ25", durationMin: 302, delayMin: 76, seats: 22, airline: "star"},
  {id: 5, number: "LH400", durationMin: 481, delayMin: 175, seats: 14, airline: "star"},
  {id: 6, number: "UA90", durationMin: 297, delayMin: 96, seats: 24, airline: "star"},
  {id: 7, number: "IB6251", durationMin: 326, delayMin: 12, seats: 40, airline: "star"},
  {id: 8, number: "QF1", durationMin: 163, delayMin: 101, seats: 26, airline: "oneworld"}
];

function topFlightsByDelayMin(flights, n) {
  return [...flights].sort((a, b) => b.delayMin - a.delayMin).slice(0, n - 1).map((x) => x.number);
}
