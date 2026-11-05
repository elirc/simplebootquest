const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 557, delayMin: 130, seats: 30, airline: "oneworld"},
  {id: 2, number: "KL641", durationMin: 602, delayMin: 130, seats: 6, airline: "star"},
  {id: 3, number: "LH400", durationMin: 78, delayMin: 99, seats: 23, airline: "skyteam"},
  {id: 4, number: "AF22", durationMin: 561, delayMin: 45, seats: 40, airline: "star"},
  {id: 5, number: "UA90", durationMin: 260, delayMin: 42, seats: 27, airline: "star"},
  {id: 6, number: "BA117", durationMin: 279, delayMin: 7, seats: 30, airline: "skyteam"},
  {id: 7, number: "IB6251", durationMin: 420, delayMin: 35, seats: 36, airline: "star"},
  {id: 8, number: "DL15", durationMin: 592, delayMin: 104, seats: 20, airline: "star"}
];

test("an empty list", () => {
  expect(summariseFlights([])).toEqual([]);
});

test("all flights", () => {
  expect(summariseFlights(FLIGHTS)).toEqual([{"id":1,"number":"QF1","delayMin":130},{"id":2,"number":"KL641","delayMin":130},{"id":3,"number":"LH400","delayMin":99},{"id":4,"number":"AF22","delayMin":45},{"id":5,"number":"UA90","delayMin":42},{"id":6,"number":"BA117","delayMin":7},{"id":7,"number":"IB6251","delayMin":35},{"id":8,"number":"DL15","delayMin":104}]);
});
