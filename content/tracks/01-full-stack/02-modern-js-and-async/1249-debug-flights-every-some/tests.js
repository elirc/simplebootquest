const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 418, delayMin: 49, seats: 3, airline: "star"},
  {id: 2, number: "TK1", durationMin: 93, delayMin: 75, seats: 22, airline: "star"},
  {id: 3, number: "KL641", durationMin: 630, delayMin: 9, seats: 9, airline: "skyteam"},
  {id: 4, number: "AF22", durationMin: 161, delayMin: 110, seats: 24, airline: "skyteam"},
  {id: 5, number: "SQ25", durationMin: 746, delayMin: 96, seats: 6, airline: "skyteam"},
  {id: 6, number: "QF1", durationMin: 452, delayMin: 139, seats: 40, airline: "oneworld"},
  {id: 7, number: "IB6251", durationMin: 55, delayMin: 63, seats: 36, airline: "star"},
  {id: 8, number: "BA117", durationMin: 573, delayMin: 129, seats: 34, airline: "star"}
];

test("with 63", () => {
  expect(allFlightsUnder(FLIGHTS, 63)).toEqual(false);
});

test("with 140", () => {
  expect(allFlightsUnder(FLIGHTS, 140)).toEqual(true);
});

test("with 139", () => {
  expect(allFlightsUnder(FLIGHTS, 139)).toEqual(false);
});
