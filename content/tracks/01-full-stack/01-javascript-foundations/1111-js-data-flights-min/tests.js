const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 670, delayMin: 2, seats: 8, airline: "skyteam"},
  {id: 2, number: "BA117", durationMin: 264, delayMin: 105, seats: 15, airline: "star"},
  {id: 3, number: "EK3", durationMin: 219, delayMin: 112, seats: 14, airline: "star"},
  {id: 4, number: "IB6251", durationMin: 415, delayMin: 106, seats: 47, airline: "star"},
  {id: 5, number: "LH400", durationMin: 115, delayMin: 77, seats: 6, airline: "star"},
  {id: 6, number: "SQ25", durationMin: 236, delayMin: 21, seats: 44, airline: "oneworld"},
  {id: 7, number: "KL641", durationMin: 232, delayMin: 17, seats: 5, airline: "star"},
  {id: 8, number: "AF22", durationMin: 448, delayMin: 18, seats: 27, airline: "skyteam"}
];

test("an empty list", () => {
  expect(lowestDurationMin([])).toEqual(null);
});

test("all flights", () => {
  expect(lowestDurationMin(FLIGHTS)).toEqual("LH400");
});
