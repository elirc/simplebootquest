const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 773, delayMin: 85, seats: 47, airline: "skyteam"},
  {id: 2, number: "IB6251", durationMin: 218, delayMin: 3, seats: 32, airline: "skyteam"},
  {id: 3, number: "DL15", durationMin: 203, delayMin: 92, seats: 12, airline: "star"},
  {id: 4, number: "LH400", durationMin: 416, delayMin: 103, seats: 25, airline: "skyteam"},
  {id: 5, number: "AF22", durationMin: 453, delayMin: 148, seats: 6, airline: "oneworld"},
  {id: 6, number: "EK3", durationMin: 174, delayMin: 110, seats: 10, airline: "skyteam"},
  {id: 7, number: "UA90", durationMin: 351, delayMin: 15, seats: 36, airline: "star"},
  {id: 8, number: "SQ25", durationMin: 821, delayMin: 165, seats: 6, airline: "oneworld"}
];

test("with \"oneworld\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "oneworld")).toEqual(2);
});

test("with \"skyteam\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "skyteam")).toEqual(4);
});

test("with \"star\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "star")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countFlightsByAirline(FLIGHTS, "nope")).toEqual(0);
});
