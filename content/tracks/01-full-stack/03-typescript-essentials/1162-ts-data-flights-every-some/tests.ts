const FLIGHTS = [
  {id: 1, number: "DL15", durationMin: 686, delayMin: 109, seats: 7, airline: "oneworld"},
  {id: 2, number: "AA100", durationMin: 201, delayMin: 160, seats: 44, airline: "oneworld"},
  {id: 3, number: "EK3", durationMin: 621, delayMin: 49, seats: 18, airline: "star"},
  {id: 4, number: "BA117", durationMin: 140, delayMin: 121, seats: 28, airline: "oneworld"},
  {id: 5, number: "QF1", durationMin: 746, delayMin: 171, seats: 23, airline: "skyteam"},
  {id: 6, number: "LH400", durationMin: 168, delayMin: 96, seats: 34, airline: "oneworld"},
  {id: 7, number: "KL641", durationMin: 240, delayMin: 60, seats: 1, airline: "oneworld"},
  {id: 8, number: "AF22", durationMin: 315, delayMin: 147, seats: 2, airline: "star"}
];

test("with 7", () => {
  expect(allFlightsUnder(FLIGHTS, 7)).toEqual(false);
});

test("with 45", () => {
  expect(allFlightsUnder(FLIGHTS, 45)).toEqual(true);
});

test("with 44", () => {
  expect(allFlightsUnder(FLIGHTS, 44)).toEqual(false);
});
