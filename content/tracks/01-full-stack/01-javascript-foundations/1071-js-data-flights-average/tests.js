const FLIGHTS = [
  {id: 1, number: "KL641", durationMin: 759, delayMin: 37, seats: 7, airline: "skyteam"},
  {id: 2, number: "IB6251", durationMin: 604, delayMin: 60, seats: 1, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 326, delayMin: 89, seats: 44, airline: "star"},
  {id: 4, number: "AA100", durationMin: 439, delayMin: 17, seats: 23, airline: "oneworld"},
  {id: 5, number: "TK1", durationMin: 318, delayMin: 44, seats: 26, airline: "oneworld"},
  {id: 6, number: "EK3", durationMin: 102, delayMin: 146, seats: 30, airline: "star"},
  {id: 7, number: "AF22", durationMin: 662, delayMin: 76, seats: 2, airline: "star"},
  {id: 8, number: "UA90", durationMin: 840, delayMin: 156, seats: 5, airline: "skyteam"}
];

test("an empty list", () => {
  expect(averageSeats([])).toEqual(null);
});

test("all flights", () => {
  expect(averageSeats(FLIGHTS)).toEqual(17.3);
});
