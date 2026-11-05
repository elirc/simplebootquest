const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 288, delayMin: 85, seats: 11, airline: "oneworld"},
  {id: 2, number: "EK3", durationMin: 94, delayMin: 34, seats: 7, airline: "star"},
  {id: 3, number: "IB6251", durationMin: 334, delayMin: 154, seats: 21, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 835, delayMin: 122, seats: 29, airline: "star"},
  {id: 5, number: "AA100", durationMin: 210, delayMin: 88, seats: 1, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 733, delayMin: 128, seats: 0, airline: "star"},
  {id: 7, number: "BA117", durationMin: 295, delayMin: 71, seats: 31, airline: "star"},
  {id: 8, number: "QF1", durationMin: 764, delayMin: 107, seats: 1, airline: "oneworld"}
];

test("with \"UA90\"", () => {
  expect(durationMinOf(FLIGHTS, "UA90")).toEqual(288);
});

test("with \"Nope\"", () => {
  expect(durationMinOf(FLIGHTS, "Nope")).toEqual(null);
});
