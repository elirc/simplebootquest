const FLIGHTS = [
  {id: 1, number: "TK1", durationMin: 110, delayMin: 21, seats: 11, airline: "star"},
  {id: 2, number: "UA90", durationMin: 373, delayMin: 80, seats: 45, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 802, delayMin: 48, seats: 7, airline: "oneworld"},
  {id: 4, number: "LH400", durationMin: 615, delayMin: 86, seats: 3, airline: "oneworld"},
  {id: 5, number: "IB6251", durationMin: 412, delayMin: 2, seats: 44, airline: "star"},
  {id: 6, number: "QF1", durationMin: 168, delayMin: 128, seats: 15, airline: "star"},
  {id: 7, number: "AA100", durationMin: 731, delayMin: 102, seats: 4, airline: "star"},
  {id: 8, number: "BA117", durationMin: 473, delayMin: 22, seats: 36, airline: "oneworld"}
];

test("with 1", () => {
  expect(nthBySeats(FLIGHTS, 1)).toEqual("UA90");
});

test("with 2", () => {
  expect(nthBySeats(FLIGHTS, 2)).toEqual("IB6251");
});

test("with 5", () => {
  expect(nthBySeats(FLIGHTS, 5)).toEqual("TK1");
});

test("with 0", () => {
  expect(nthBySeats(FLIGHTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthBySeats(FLIGHTS, 99)).toEqual(null);
});
