const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 93, delayMin: 75, seats: 34, airline: "star"},
  {id: 2, number: "SQ25", durationMin: 92, delayMin: 99, seats: 41, airline: "oneworld"},
  {id: 3, number: "UA90", durationMin: 372, delayMin: 15, seats: 3, airline: "star"},
  {id: 4, number: "DL15", durationMin: 71, delayMin: 104, seats: 43, airline: "oneworld"},
  {id: 5, number: "EK3", durationMin: 740, delayMin: 176, seats: 17, airline: "star"},
  {id: 6, number: "LH400", durationMin: 197, delayMin: 106, seats: 2, airline: "skyteam"},
  {id: 7, number: "BA117", durationMin: 123, delayMin: 172, seats: 26, airline: "star"},
  {id: 8, number: "AA100", durationMin: 411, delayMin: 20, seats: 40, airline: "oneworld"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(FLIGHTS);
  flightsByDelayMin(FLIGHTS);
  expect(JSON.stringify(FLIGHTS)).toBe(before);
});

test("all flights", () => {
  expect(flightsByDelayMin(FLIGHTS)).toEqual(["UA90","AA100","TK1","SQ25","DL15","LH400","BA117","EK3"]);
});
