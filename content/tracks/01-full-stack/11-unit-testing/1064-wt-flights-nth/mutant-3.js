// mutant: off-by-one in the index
const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 748, delayMin: 99, seats: 30, airline: "oneworld"},
  {id: 2, number: "UA90", durationMin: 328, delayMin: 9, seats: 17, airline: "oneworld"},
  {id: 3, number: "EK3", durationMin: 594, delayMin: 170, seats: 4, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 438, delayMin: 110, seats: 24, airline: "skyteam"},
  {id: 5, number: "BA117", durationMin: 694, delayMin: 170, seats: 35, airline: "skyteam"},
  {id: 6, number: "IB6251", durationMin: 228, delayMin: 76, seats: 0, airline: "star"},
  {id: 7, number: "LH400", durationMin: 668, delayMin: 116, seats: 16, airline: "oneworld"},
  {id: 8, number: "KL641", durationMin: 373, delayMin: 137, seats: 3, airline: "oneworld"}
];

function nthByDelayMin(flights, n) {
  const sorted = [...flights].sort((a, b) => b.delayMin - a.delayMin);
  return n >= 1 && n <= sorted.length ? sorted[n].number : null;
}
