const FLIGHTS = [
  {id: 1, number: "EK3", durationMin: 66, delayMin: 68, seats: 41, airline: "star"},
  {id: 2, number: "QF1", durationMin: 354, delayMin: 153, seats: 14, airline: "oneworld"},
  {id: 3, number: "KL641", durationMin: 306, delayMin: 124, seats: 32, airline: "star"},
  {id: 4, number: "IB6251", durationMin: 636, delayMin: 7, seats: 10, airline: "oneworld"},
  {id: 5, number: "AF22", durationMin: 586, delayMin: 153, seats: 5, airline: "star"},
  {id: 6, number: "TK1", durationMin: 819, delayMin: 104, seats: 47, airline: "oneworld"},
  {id: 7, number: "BA117", durationMin: 336, delayMin: 143, seats: 38, airline: "oneworld"},
  {id: 8, number: "LH400", durationMin: 130, delayMin: 81, seats: 5, airline: "star"}
];

test("with 306, 354", () => {
  expect(flightsInRange(FLIGHTS, 306, 354)).toEqual(["QF1","KL641","BA117"]);
});

test("with 354, 586", () => {
  expect(flightsInRange(FLIGHTS, 354, 586)).toEqual(["QF1","AF22"]);
});

test("with 306, 306", () => {
  expect(flightsInRange(FLIGHTS, 306, 306)).toEqual(["KL641"]);
});
