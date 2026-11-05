const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 646, delayMin: 61, seats: 19, airline: "oneworld"},
  {id: 2, number: "KL641", durationMin: 547, delayMin: 173, seats: 1, airline: "oneworld"},
  {id: 3, number: "AF22", durationMin: 638, delayMin: 64, seats: 17, airline: "oneworld"},
  {id: 4, number: "BA117", durationMin: 262, delayMin: 35, seats: 34, airline: "skyteam"},
  {id: 5, number: "IB6251", durationMin: 816, delayMin: 150, seats: 22, airline: "skyteam"},
  {id: 6, number: "TK1", durationMin: 75, delayMin: 20, seats: 7, airline: "skyteam"},
  {id: 7, number: "UA90", durationMin: 609, delayMin: 29, seats: 47, airline: "skyteam"},
  {id: 8, number: "LH400", durationMin: 135, delayMin: 10, seats: 26, airline: "oneworld"}
];

test("with 1, 3", () => {
  expect(pageOfFlights(FLIGHTS, 1, 3)).toEqual({"items":["AA100","KL641","AF22"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfFlights(FLIGHTS, 2, 3)).toEqual({"items":["BA117","IB6251","TK1"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfFlights(FLIGHTS, 3, 3)).toEqual({"items":["UA90","LH400"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfFlights(FLIGHTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
