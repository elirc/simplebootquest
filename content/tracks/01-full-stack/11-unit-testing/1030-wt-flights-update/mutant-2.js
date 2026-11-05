// mutant: mutates the original objects
const FLIGHTS = [
  {id: 1, number: "LH400", durationMin: 572, delayMin: 13, seats: 34, airline: "star"},
  {id: 2, number: "IB6251", durationMin: 835, delayMin: 35, seats: 40, airline: "oneworld"},
  {id: 3, number: "UA90", durationMin: 567, delayMin: 70, seats: 26, airline: "star"},
  {id: 4, number: "BA117", durationMin: 77, delayMin: 157, seats: 27, airline: "oneworld"},
  {id: 5, number: "AF22", durationMin: 739, delayMin: 47, seats: 36, airline: "oneworld"},
  {id: 6, number: "DL15", durationMin: 409, delayMin: 121, seats: 18, airline: "star"},
  {id: 7, number: "SQ25", durationMin: 718, delayMin: 141, seats: 7, airline: "skyteam"},
  {id: 8, number: "AA100", durationMin: 348, delayMin: 114, seats: 34, airline: "skyteam"}
];

function bumpDurationMin(flights, value, amount) {
  return flights.map((x) => (x.airline === value ? Object.assign(x, { durationMin: x.durationMin + amount } : x));
}
