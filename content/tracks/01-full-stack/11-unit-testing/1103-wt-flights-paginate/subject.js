const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 451, delayMin: 79, seats: 44, airline: "skyteam"},
  {id: 2, number: "UA90", durationMin: 100, delayMin: 115, seats: 24, airline: "star"},
  {id: 3, number: "EK3", durationMin: 139, delayMin: 43, seats: 27, airline: "star"},
  {id: 4, number: "BA117", durationMin: 461, delayMin: 133, seats: 37, airline: "skyteam"},
  {id: 5, number: "LH400", durationMin: 697, delayMin: 66, seats: 32, airline: "oneworld"},
  {id: 6, number: "KL641", durationMin: 505, delayMin: 95, seats: 13, airline: "skyteam"},
  {id: 7, number: "AF22", durationMin: 178, delayMin: 72, seats: 35, airline: "skyteam"},
  {id: 8, number: "QF1", durationMin: 808, delayMin: 146, seats: 0, airline: "star"}
];

function pageOfFlights(flights, page, size) {
  const totalPages = Math.ceil(flights.length / size);
  const items = flights.slice((page - 1) * size, page * size).map((x) => x.number);
  return { items, page, totalPages };
}
