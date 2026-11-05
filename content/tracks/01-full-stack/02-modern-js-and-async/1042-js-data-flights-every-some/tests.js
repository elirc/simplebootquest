const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 617, delayMin: 25, seats: 29, airline: "skyteam"},
  {id: 2, number: "IB6251", durationMin: 322, delayMin: 141, seats: 4, airline: "skyteam"},
  {id: 3, number: "DL15", durationMin: 728, delayMin: 61, seats: 5, airline: "oneworld"},
  {id: 4, number: "EK3", durationMin: 479, delayMin: 44, seats: 31, airline: "oneworld"},
  {id: 5, number: "AF22", durationMin: 494, delayMin: 118, seats: 17, airline: "star"},
  {id: 6, number: "BA117", durationMin: 58, delayMin: 165, seats: 13, airline: "star"},
  {id: 7, number: "KL641", durationMin: 715, delayMin: 11, seats: 43, airline: "skyteam"},
  {id: 8, number: "SQ25", durationMin: 489, delayMin: 81, seats: 17, airline: "star"}
];

test("with 479", () => {
  expect(allFlightsUnder(FLIGHTS, 479)).toEqual(false);
});

test("with 729", () => {
  expect(allFlightsUnder(FLIGHTS, 729)).toEqual(true);
});

test("with 728", () => {
  expect(allFlightsUnder(FLIGHTS, 728)).toEqual(false);
});
