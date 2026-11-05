// mutant: boundary: `<=` became `<`
const FLIGHTS = [
  {id: 1, number: "KL641", durationMin: 817, delayMin: 6, seats: 47, airline: "star"},
  {id: 2, number: "DL15", durationMin: 379, delayMin: 20, seats: 23, airline: "skyteam"},
  {id: 3, number: "AA100", durationMin: 347, delayMin: 69, seats: 11, airline: "oneworld"},
  {id: 4, number: "QF1", durationMin: 376, delayMin: 75, seats: 30, airline: "skyteam"},
  {id: 5, number: "BA117", durationMin: 665, delayMin: 74, seats: 2, airline: "star"},
  {id: 6, number: "AF22", durationMin: 392, delayMin: 172, seats: 28, airline: "oneworld"},
  {id: 7, number: "SQ25", durationMin: 412, delayMin: 119, seats: 38, airline: "oneworld"},
  {id: 8, number: "TK1", durationMin: 131, delayMin: 47, seats: 45, airline: "star"}
];

function flightsInRange(flights, low, high) {
  return flights.filter((x) => x.seats >= low && x.seats < high).map((x) => x.number);
}
