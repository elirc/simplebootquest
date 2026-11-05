const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 147, delayMin: 75, seats: 36, airline: "skyteam"},
  {id: 2, number: "KL641", durationMin: 552, delayMin: 62, seats: 17, airline: "oneworld"},
  {id: 3, number: "BA117", durationMin: 552, delayMin: 57, seats: 44, airline: "oneworld"},
  {id: 4, number: "SQ25", durationMin: 470, delayMin: 95, seats: 47, airline: "star"},
  {id: 5, number: "AA100", durationMin: 682, delayMin: 152, seats: 11, airline: "star"},
  {id: 6, number: "UA90", durationMin: 531, delayMin: 161, seats: 33, airline: "oneworld"},
  {id: 7, number: "IB6251", durationMin: 837, delayMin: 144, seats: 2, airline: "oneworld"},
  {id: 8, number: "AF22", durationMin: 432, delayMin: 11, seats: 5, airline: "skyteam"}
];

test("an empty list", () => {
  expect(distinctAirlines([])).toEqual([]);
});

test("all flights", () => {
  expect(distinctAirlines(FLIGHTS)).toEqual(["oneworld","skyteam","star"]);
});
