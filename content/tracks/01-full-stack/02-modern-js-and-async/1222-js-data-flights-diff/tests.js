const BEFORE = [
  {id: 1, number: "UA90", durationMin: 548, delayMin: 159, seats: 3, airline: "oneworld"},
  {id: 2, number: "SQ25", durationMin: 671, delayMin: 82, seats: 21, airline: "skyteam"},
  {id: 3, number: "DL15", durationMin: 216, delayMin: 44, seats: 15, airline: "oneworld"},
  {id: 4, number: "QF1", durationMin: 684, delayMin: 62, seats: 40, airline: "skyteam"},
  {id: 5, number: "KL641", durationMin: 195, delayMin: 40, seats: 36, airline: "skyteam"},
  {id: 6, number: "AA100", durationMin: 474, delayMin: 3, seats: 22, airline: "skyteam"},
  {id: 7, number: "EK3", durationMin: 678, delayMin: 72, seats: 34, airline: "oneworld"},
  {id: 8, number: "BA117", durationMin: 582, delayMin: 5, seats: 13, airline: "skyteam"}
];
const AFTER = [
  {id: 1, number: "UA90", durationMin: 548, delayMin: 159, seats: 3, airline: "oneworld"},
  {id: 2, number: "SQ25", durationMin: 678, delayMin: 82, seats: 21, airline: "skyteam"},
  {id: 3, number: "DL15", durationMin: 216, delayMin: 44, seats: 15, airline: "oneworld"},
  {id: 4, number: "QF1", durationMin: 684, delayMin: 62, seats: 40, airline: "skyteam"},
  {id: 5, number: "KL641", durationMin: 202, delayMin: 40, seats: 36, airline: "skyteam"},
  {id: 6, number: "AA100", durationMin: 474, delayMin: 3, seats: 22, airline: "skyteam"},
  {id: 7, number: "EK3", durationMin: 678, delayMin: 72, seats: 34, airline: "oneworld"},
  {id: 8, number: "BA117", durationMin: 589, delayMin: 5, seats: 13, airline: "skyteam"}
];

test("finds changed ids", () => {
  expect(durationMinChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(durationMinChanges(BEFORE, BEFORE)).toEqual([]);
});
