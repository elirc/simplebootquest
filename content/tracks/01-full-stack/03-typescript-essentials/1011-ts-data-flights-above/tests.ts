const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 506, delayMin: 152, seats: 46, airline: "oneworld"},
  {id: 2, number: "EK3", durationMin: 122, delayMin: 180, seats: 7, airline: "oneworld"},
  {id: 3, number: "AA100", durationMin: 271, delayMin: 164, seats: 16, airline: "star"},
  {id: 4, number: "KL641", durationMin: 154, delayMin: 62, seats: 1, airline: "star"},
  {id: 5, number: "SQ25", durationMin: 714, delayMin: 106, seats: 43, airline: "skyteam"},
  {id: 6, number: "IB6251", durationMin: 60, delayMin: 52, seats: 33, airline: "skyteam"},
  {id: 7, number: "TK1", durationMin: 555, delayMin: 7, seats: 11, airline: "star"},
  {id: 8, number: "DL15", durationMin: 643, delayMin: 124, seats: 16, airline: "oneworld"}
];

test("with 62", () => {
  expect(flightsAbove(FLIGHTS, 62)).toEqual(["QF1","EK3","AA100","SQ25","DL15"]);
});

test("with 124", () => {
  expect(flightsAbove(FLIGHTS, 124)).toEqual(["QF1","EK3","AA100"]);
});

test("with 999999", () => {
  expect(flightsAbove(FLIGHTS, 999999)).toEqual([]);
});
