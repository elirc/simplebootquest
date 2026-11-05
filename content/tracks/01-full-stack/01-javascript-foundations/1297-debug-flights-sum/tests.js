const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 806, delayMin: 70, seats: 39, airline: "skyteam"},
  {id: 2, number: "LH400", durationMin: 673, delayMin: 158, seats: 36, airline: "oneworld"},
  {id: 3, number: "DL15", durationMin: 247, delayMin: 147, seats: 9, airline: "skyteam"},
  {id: 4, number: "BA117", durationMin: 307, delayMin: 153, seats: 35, airline: "oneworld"},
  {id: 5, number: "IB6251", durationMin: 775, delayMin: 126, seats: 36, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 140, delayMin: 111, seats: 2, airline: "skyteam"},
  {id: 7, number: "AA100", durationMin: 807, delayMin: 145, seats: 8, airline: "skyteam"},
  {id: 8, number: "TK1", durationMin: 180, delayMin: 91, seats: 9, airline: "star"}
];

test("an empty list", () => {
  expect(totalSeats([])).toEqual(0);
});

test("all flights", () => {
  expect(totalSeats(FLIGHTS)).toEqual(174);
});
