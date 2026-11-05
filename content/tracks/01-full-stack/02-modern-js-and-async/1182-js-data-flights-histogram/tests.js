const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 61, delayMin: 122, seats: 38, airline: "skyteam"},
  {id: 2, number: "IB6251", durationMin: 185, delayMin: 106, seats: 10, airline: "skyteam"},
  {id: 3, number: "AA100", durationMin: 280, delayMin: 178, seats: 38, airline: "skyteam"},
  {id: 4, number: "AF22", durationMin: 800, delayMin: 15, seats: 10, airline: "skyteam"},
  {id: 5, number: "DL15", durationMin: 512, delayMin: 123, seats: 10, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 589, delayMin: 5, seats: 19, airline: "star"},
  {id: 7, number: "BA117", durationMin: 115, delayMin: 89, seats: 13, airline: "oneworld"},
  {id: 8, number: "TK1", durationMin: 736, delayMin: 67, seats: 40, airline: "oneworld"}
];

test("with 45", () => {
  expect(delayMinHistogram(FLIGHTS, 45)).toEqual({"0":2,"45":2,"90":3,"135":1});
});

test("with 90", () => {
  expect(delayMinHistogram(FLIGHTS, 90)).toEqual({"0":4,"90":4});
});
