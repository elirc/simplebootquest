const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 774, delayMin: 136, seats: 1, airline: "star"},
  {id: 2, number: "AF22", durationMin: 632, delayMin: 127, seats: 26, airline: "skyteam"},
  {id: 3, number: "QF1", durationMin: 282, delayMin: 55, seats: 18, airline: "oneworld"},
  {id: 4, number: "EK3", durationMin: 798, delayMin: 82, seats: 13, airline: "oneworld"},
  {id: 5, number: "DL15", durationMin: 222, delayMin: 144, seats: 21, airline: "skyteam"},
  {id: 6, number: "UA90", durationMin: 290, delayMin: 81, seats: 43, airline: "star"},
  {id: 7, number: "BA117", durationMin: 92, delayMin: 71, seats: 18, airline: "skyteam"},
  {id: 8, number: "TK1", durationMin: 341, delayMin: 173, seats: 48, airline: "star"}
];

test("with 81, 127", () => {
  expect(flightsInRange(FLIGHTS, 81, 127)).toEqual(["AF22","EK3","UA90"]);
});

test("with 127, 136", () => {
  expect(flightsInRange(FLIGHTS, 127, 136)).toEqual(["SQ25","AF22"]);
});

test("with 81, 81", () => {
  expect(flightsInRange(FLIGHTS, 81, 81)).toEqual(["UA90"]);
});
