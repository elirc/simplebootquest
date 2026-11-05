// mutant: search became case-sensitive
const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 142, delayMin: 95, seats: 23, airline: "oneworld"},
  {id: 2, number: "UA90", durationMin: 265, delayMin: 145, seats: 1, airline: "skyteam"},
  {id: 3, number: "QF1", durationMin: 804, delayMin: 78, seats: 30, airline: "skyteam"},
  {id: 4, number: "KL641", durationMin: 228, delayMin: 92, seats: 21, airline: "skyteam"},
  {id: 5, number: "BA117", durationMin: 556, delayMin: 79, seats: 43, airline: "skyteam"},
  {id: 6, number: "EK3", durationMin: 740, delayMin: 176, seats: 10, airline: "skyteam"},
  {id: 7, number: "DL15", durationMin: 195, delayMin: 155, seats: 30, airline: "skyteam"},
  {id: 8, number: "AA100", durationMin: 279, delayMin: 140, seats: 28, airline: "star"}
];

function searchFlights(flights, query) {
  const q = query.trim().toLowerCase();
  return flights.filter((x) => x.number.includes(q)).map((x) => x.number);
}
