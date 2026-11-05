const FLIGHTS = [
  {id: 1, number: "UA90", durationMin: 780, delayMin: 118, seats: 3, airline: "oneworld"},
  {id: 2, number: "IB6251", durationMin: 166, delayMin: 25, seats: 39, airline: "skyteam"},
  {id: 3, number: "SQ25", durationMin: 348, delayMin: 57, seats: 3, airline: "star"},
  {id: 4, number: "BA117", durationMin: 187, delayMin: 124, seats: 15, airline: "oneworld"},
  {id: 5, number: "AA100", durationMin: 507, delayMin: 39, seats: 8, airline: "oneworld"},
  {id: 6, number: "DL15", durationMin: 251, delayMin: 89, seats: 29, airline: "oneworld"},
  {id: 7, number: "TK1", durationMin: 458, delayMin: 71, seats: 12, airline: "oneworld"},
  {id: 8, number: "EK3", durationMin: 556, delayMin: 123, seats: 19, airline: "star"}
];

test("with \"b6\"", () => {
  expect(searchFlights(FLIGHTS, "b6")).toEqual(["IB6251"]);
});

test("with \"B6\"", () => {
  expect(searchFlights(FLIGHTS, "B6")).toEqual(["IB6251"]);
});

test("with \"  \"", () => {
  expect(searchFlights(FLIGHTS, "  ")).toEqual(["UA90","IB6251","SQ25","BA117","AA100","DL15","TK1","EK3"]);
});

test("with \"zzz\"", () => {
  expect(searchFlights(FLIGHTS, "zzz")).toEqual([]);
});
