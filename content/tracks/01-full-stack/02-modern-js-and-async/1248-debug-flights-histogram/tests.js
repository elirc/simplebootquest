const FLIGHTS = [
  {id: 1, number: "AF22", durationMin: 324, delayMin: 112, seats: 13, airline: "oneworld"},
  {id: 2, number: "LH400", durationMin: 456, delayMin: 137, seats: 17, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 760, delayMin: 169, seats: 1, airline: "star"},
  {id: 4, number: "KL641", durationMin: 209, delayMin: 44, seats: 25, airline: "skyteam"},
  {id: 5, number: "AA100", durationMin: 383, delayMin: 152, seats: 41, airline: "oneworld"},
  {id: 6, number: "DL15", durationMin: 487, delayMin: 127, seats: 48, airline: "oneworld"},
  {id: 7, number: "UA90", durationMin: 496, delayMin: 21, seats: 44, airline: "skyteam"},
  {id: 8, number: "EK3", durationMin: 723, delayMin: 100, seats: 4, airline: "oneworld"}
];

test("with 45", () => {
  expect(delayMinHistogram(FLIGHTS, 45)).toEqual({"0":2,"90":3,"135":3});
});

test("with 90", () => {
  expect(delayMinHistogram(FLIGHTS, 90)).toEqual({"0":2,"90":6});
});
