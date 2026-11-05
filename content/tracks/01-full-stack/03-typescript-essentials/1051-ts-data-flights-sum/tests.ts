const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 533, delayMin: 48, seats: 15, airline: "star"},
  {id: 2, number: "UA90", durationMin: 107, delayMin: 174, seats: 3, airline: "oneworld"},
  {id: 3, number: "LH400", durationMin: 719, delayMin: 29, seats: 26, airline: "star"},
  {id: 4, number: "AA100", durationMin: 149, delayMin: 168, seats: 1, airline: "skyteam"},
  {id: 5, number: "QF1", durationMin: 532, delayMin: 52, seats: 44, airline: "oneworld"},
  {id: 6, number: "IB6251", durationMin: 333, delayMin: 136, seats: 1, airline: "oneworld"},
  {id: 7, number: "DL15", durationMin: 61, delayMin: 64, seats: 45, airline: "skyteam"},
  {id: 8, number: "EK3", durationMin: 279, delayMin: 145, seats: 26, airline: "skyteam"}
];

test("an empty list", () => {
  expect(totalSeats([])).toEqual(0);
});

test("all flights", () => {
  expect(totalSeats(FLIGHTS)).toEqual(161);
});
