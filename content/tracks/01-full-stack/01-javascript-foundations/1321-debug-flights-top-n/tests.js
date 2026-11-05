const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 634, delayMin: 160, seats: 20, airline: "oneworld"},
  {id: 2, number: "QF1", durationMin: 395, delayMin: 158, seats: 35, airline: "star"},
  {id: 3, number: "EK3", durationMin: 141, delayMin: 92, seats: 40, airline: "oneworld"},
  {id: 4, number: "IB6251", durationMin: 175, delayMin: 113, seats: 26, airline: "skyteam"},
  {id: 5, number: "AF22", durationMin: 610, delayMin: 141, seats: 48, airline: "skyteam"},
  {id: 6, number: "KL641", durationMin: 751, delayMin: 70, seats: 0, airline: "oneworld"},
  {id: 7, number: "LH400", durationMin: 334, delayMin: 172, seats: 23, airline: "oneworld"},
  {id: 8, number: "UA90", durationMin: 350, delayMin: 56, seats: 11, airline: "skyteam"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(FLIGHTS);
  topFlightsByDurationMin(FLIGHTS, 1);
  expect(JSON.stringify(FLIGHTS)).toBe(before);
});

test("with 1", () => {
  expect(topFlightsByDurationMin(FLIGHTS, 1)).toEqual(["KL641"]);
});

test("with 3", () => {
  expect(topFlightsByDurationMin(FLIGHTS, 3)).toEqual(["KL641","AA100","AF22"]);
});

test("with 0", () => {
  expect(topFlightsByDurationMin(FLIGHTS, 0)).toEqual([]);
});
