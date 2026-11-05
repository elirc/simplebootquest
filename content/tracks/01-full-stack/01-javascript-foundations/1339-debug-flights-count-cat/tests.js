const FLIGHTS = [
  {id: 1, number: "KL641", durationMin: 393, delayMin: 106, seats: 30, airline: "oneworld"},
  {id: 2, number: "TK1", durationMin: 70, delayMin: 131, seats: 40, airline: "oneworld"},
  {id: 3, number: "SQ25", durationMin: 403, delayMin: 127, seats: 14, airline: "oneworld"},
  {id: 4, number: "AA100", durationMin: 375, delayMin: 17, seats: 36, airline: "oneworld"},
  {id: 5, number: "IB6251", durationMin: 438, delayMin: 53, seats: 44, airline: "oneworld"},
  {id: 6, number: "AF22", durationMin: 292, delayMin: 157, seats: 29, airline: "oneworld"},
  {id: 7, number: "BA117", durationMin: 110, delayMin: 108, seats: 30, airline: "skyteam"},
  {id: 8, number: "EK3", durationMin: 506, delayMin: 162, seats: 36, airline: "oneworld"}
];

test("with \"oneworld\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "oneworld")).toEqual(7);
});

test("with \"skyteam\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "skyteam")).toEqual(1);
});

test("with \"star\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "star")).toEqual(0);
});

test("with \"nope\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "nope")).toEqual(0);
});
