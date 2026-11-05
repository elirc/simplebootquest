const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 155, delayMin: 120, seats: 45, airline: "skyteam"},
  {id: 2, number: "LH400", durationMin: 276, delayMin: 85, seats: 47, airline: "skyteam"},
  {id: 3, number: "TK1", durationMin: 561, delayMin: 98, seats: 20, airline: "skyteam"},
  {id: 4, number: "DL15", durationMin: 206, delayMin: 105, seats: 44, airline: "skyteam"},
  {id: 5, number: "SQ25", durationMin: 753, delayMin: 47, seats: 33, airline: "star"},
  {id: 6, number: "UA90", durationMin: 746, delayMin: 166, seats: 25, airline: "star"},
  {id: 7, number: "AA100", durationMin: 821, delayMin: 4, seats: 38, airline: "star"},
  {id: 8, number: "QF1", durationMin: 488, delayMin: 95, seats: 29, airline: "skyteam"}
];

test("an empty list", () => {
  expect(lowestDelayMin([])).toEqual(null);
});

test("all flights", () => {
  expect(lowestDelayMin(FLIGHTS)).toEqual("AA100");
});
