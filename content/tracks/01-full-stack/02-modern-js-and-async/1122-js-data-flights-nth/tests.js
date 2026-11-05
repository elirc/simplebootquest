const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 659, delayMin: 16, seats: 32, airline: "skyteam"},
  {id: 2, number: "DL15", durationMin: 765, delayMin: 7, seats: 16, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 411, delayMin: 159, seats: 34, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 372, delayMin: 53, seats: 7, airline: "oneworld"},
  {id: 5, number: "QF1", durationMin: 618, delayMin: 58, seats: 38, airline: "star"},
  {id: 6, number: "IB6251", durationMin: 518, delayMin: 111, seats: 12, airline: "skyteam"},
  {id: 7, number: "TK1", durationMin: 407, delayMin: 8, seats: 23, airline: "skyteam"},
  {id: 8, number: "LH400", durationMin: 646, delayMin: 54, seats: 6, airline: "star"}
];

test("with 1", () => {
  expect(nthBySeats(FLIGHTS, 1)).toEqual("QF1");
});

test("with 2", () => {
  expect(nthBySeats(FLIGHTS, 2)).toEqual("SQ25");
});

test("with 5", () => {
  expect(nthBySeats(FLIGHTS, 5)).toEqual("DL15");
});

test("with 0", () => {
  expect(nthBySeats(FLIGHTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthBySeats(FLIGHTS, 99)).toEqual(null);
});
