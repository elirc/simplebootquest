const FLIGHTS = [
  {id: 1, number: "SQ25", durationMin: 787, delayMin: 64, seats: 12, airline: "skyteam"},
  {id: 2, number: "LH400", durationMin: 363, delayMin: 2, seats: 10, airline: "oneworld"},
  {id: 3, number: "AF22", durationMin: 356, delayMin: 44, seats: 48, airline: "oneworld"},
  {id: 4, number: "TK1", durationMin: 127, delayMin: 109, seats: 17, airline: "star"},
  {id: 5, number: "DL15", durationMin: 307, delayMin: 32, seats: 39, airline: "star"},
  {id: 6, number: "BA117", durationMin: 324, delayMin: 59, seats: 16, airline: "oneworld"},
  {id: 7, number: "AA100", durationMin: 681, delayMin: 153, seats: 30, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 330, delayMin: 74, seats: 36, airline: "star"}
];

test("an empty list", () => {
  expect(summariseFlights([])).toEqual([]);
});

test("all flights", () => {
  expect(summariseFlights(FLIGHTS)).toEqual([{"id":1,"number":"SQ25","delayMin":64},{"id":2,"number":"LH400","delayMin":2},{"id":3,"number":"AF22","delayMin":44},{"id":4,"number":"TK1","delayMin":109},{"id":5,"number":"DL15","delayMin":32},{"id":6,"number":"BA117","delayMin":59},{"id":7,"number":"AA100","delayMin":153},{"id":8,"number":"KL641","delayMin":74}]);
});
