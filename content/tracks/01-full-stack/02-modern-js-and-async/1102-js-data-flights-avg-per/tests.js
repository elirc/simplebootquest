const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 338, delayMin: 91, seats: 12, airline: "star"},
  {id: 2, number: "AA100", durationMin: 760, delayMin: 144, seats: 48, airline: "skyteam"},
  {id: 3, number: "SQ25", durationMin: 743, delayMin: 36, seats: 38, airline: "oneworld"},
  {id: 4, number: "QF1", durationMin: 810, delayMin: 143, seats: 16, airline: "skyteam"},
  {id: 5, number: "AF22", durationMin: 401, delayMin: 116, seats: 38, airline: "star"},
  {id: 6, number: "TK1", durationMin: 388, delayMin: 28, seats: 8, airline: "skyteam"},
  {id: 7, number: "BA117", durationMin: 197, delayMin: 115, seats: 46, airline: "skyteam"},
  {id: 8, number: "UA90", durationMin: 223, delayMin: 114, seats: 30, airline: "skyteam"}
];

test("an empty list", () => {
  expect(averageDurationMinPerAirline([])).toEqual({});
});

test("all flights", () => {
  expect(averageDurationMinPerAirline(FLIGHTS)).toEqual({"star":370,"skyteam":476,"oneworld":743});
});
