// mutant: sort direction reversed
const FLIGHTS = [
  {id: 1, number: "EK3", durationMin: 455, delayMin: 144, seats: 46, airline: "oneworld"},
  {id: 2, number: "UA90", durationMin: 59, delayMin: 169, seats: 20, airline: "skyteam"},
  {id: 3, number: "SQ25", durationMin: 215, delayMin: 83, seats: 4, airline: "skyteam"},
  {id: 4, number: "AA100", durationMin: 390, delayMin: 164, seats: 7, airline: "star"},
  {id: 5, number: "KL641", durationMin: 436, delayMin: 125, seats: 46, airline: "skyteam"},
  {id: 6, number: "TK1", durationMin: 269, delayMin: 107, seats: 30, airline: "skyteam"},
  {id: 7, number: "IB6251", durationMin: 315, delayMin: 46, seats: 26, airline: "star"},
  {id: 8, number: "QF1", durationMin: 343, delayMin: 18, seats: 41, airline: "oneworld"}
];

function flightsInAirlineRanked(flights, value) {
  return flights
    .filter((x) => x.airline === value)
    .sort((a, b) => a.durationMin - b.durationMin)
    .map((x) => x.number);
}
