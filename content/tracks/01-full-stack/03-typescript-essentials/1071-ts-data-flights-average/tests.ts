const FLIGHTS = [
  {id: 1, number: "KL641", durationMin: 434, delayMin: 129, seats: 32, airline: "star"},
  {id: 2, number: "TK1", durationMin: 506, delayMin: 121, seats: 3, airline: "oneworld"},
  {id: 3, number: "DL15", durationMin: 105, delayMin: 119, seats: 11, airline: "star"},
  {id: 4, number: "UA90", durationMin: 216, delayMin: 173, seats: 4, airline: "star"},
  {id: 5, number: "LH400", durationMin: 279, delayMin: 5, seats: 40, airline: "oneworld"},
  {id: 6, number: "SQ25", durationMin: 247, delayMin: 115, seats: 16, airline: "skyteam"},
  {id: 7, number: "QF1", durationMin: 437, delayMin: 114, seats: 25, airline: "star"},
  {id: 8, number: "AF22", durationMin: 663, delayMin: 14, seats: 28, airline: "star"}
];

test("an empty list", () => {
  expect(averageSeats([])).toEqual(null);
});

test("all flights", () => {
  expect(averageSeats(FLIGHTS)).toEqual(19.9);
});
