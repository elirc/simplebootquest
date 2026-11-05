const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 55, delayMin: 153, seats: 29, airline: "skyteam"},
  {id: 2, number: "SQ25", durationMin: 475, delayMin: 95, seats: 47, airline: "oneworld"},
  {id: 3, number: "TK1", durationMin: 205, delayMin: 51, seats: 3, airline: "star"},
  {id: 4, number: "DL15", durationMin: 381, delayMin: 57, seats: 25, airline: "skyteam"},
  {id: 5, number: "BA117", durationMin: 188, delayMin: 2, seats: 24, airline: "star"},
  {id: 6, number: "LH400", durationMin: 85, delayMin: 121, seats: 33, airline: "oneworld"},
  {id: 7, number: "QF1", durationMin: 675, delayMin: 155, seats: 9, airline: "star"},
  {id: 8, number: "AF22", durationMin: 165, delayMin: 3, seats: 11, airline: "skyteam"}
];

test("with 165", () => {
  expect(flightsAbove(FLIGHTS, 165)).toEqual(["SQ25","TK1","DL15","BA117","QF1"]);
});

test("with 205", () => {
  expect(flightsAbove(FLIGHTS, 205)).toEqual(["SQ25","DL15","QF1"]);
});

test("with 999999", () => {
  expect(flightsAbove(FLIGHTS, 999999)).toEqual([]);
});
