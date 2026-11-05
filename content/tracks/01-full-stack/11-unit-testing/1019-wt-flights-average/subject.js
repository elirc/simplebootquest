const FLIGHTS = [
  {id: 1, number: "DL15", durationMin: 797, delayMin: 30, seats: 39, airline: "star"},
  {id: 2, number: "LH400", durationMin: 314, delayMin: 109, seats: 30, airline: "star"},
  {id: 3, number: "QF1", durationMin: 305, delayMin: 165, seats: 21, airline: "skyteam"},
  {id: 4, number: "SQ25", durationMin: 360, delayMin: 50, seats: 28, airline: "oneworld"},
  {id: 5, number: "BA117", durationMin: 619, delayMin: 46, seats: 13, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 706, delayMin: 95, seats: 44, airline: "star"},
  {id: 7, number: "EK3", durationMin: 649, delayMin: 58, seats: 42, airline: "star"},
  {id: 8, number: "IB6251", durationMin: 645, delayMin: 175, seats: 29, airline: "star"}
];

function averageDelayMin(flights) {
  if (flights.length === 0) return null;
  const total = flights.reduce((sum, x) => sum + x.delayMin, 0);
  return Math.round((total / flights.length) * 10) / 10;
}
