const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 361, delayMin: 109, seats: 26, airline: "oneworld"},
  {id: 2, number: "QF1", durationMin: 258, delayMin: 84, seats: 36, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 634, delayMin: 85, seats: 31, airline: "star"},
  {id: 4, number: "BA117", durationMin: 766, delayMin: 78, seats: 34, airline: "skyteam"},
  {id: 5, number: "AA100", durationMin: 775, delayMin: 102, seats: 1, airline: "star"},
  {id: 6, number: "UA90", durationMin: 422, delayMin: 120, seats: 36, airline: "star"},
  {id: 7, number: "KL641", durationMin: 113, delayMin: 147, seats: 30, airline: "star"},
  {id: 8, number: "IB6251", durationMin: 108, delayMin: 114, seats: 3, airline: "oneworld"}
];

test("an empty list", () => {
  expect(highestDelayMin([])).toEqual(null);
});

test("all flights", () => {
  expect(highestDelayMin(FLIGHTS)).toEqual("KL641");
});
