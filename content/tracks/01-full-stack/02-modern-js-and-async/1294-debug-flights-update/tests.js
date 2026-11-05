const FLIGHTS = [
  {id: 1, number: "AA100", durationMin: 594, delayMin: 15, seats: 41, airline: "skyteam"},
  {id: 2, number: "BA117", durationMin: 746, delayMin: 103, seats: 23, airline: "oneworld"},
  {id: 3, number: "QF1", durationMin: 758, delayMin: 156, seats: 28, airline: "oneworld"},
  {id: 4, number: "AF22", durationMin: 92, delayMin: 29, seats: 5, airline: "star"},
  {id: 5, number: "UA90", durationMin: 706, delayMin: 2, seats: 8, airline: "skyteam"},
  {id: 6, number: "LH400", durationMin: 387, delayMin: 68, seats: 24, airline: "skyteam"},
  {id: 7, number: "DL15", durationMin: 61, delayMin: 166, seats: 27, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 145, delayMin: 7, seats: 15, airline: "star"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(FLIGHTS);
  bumpDurationMin(FLIGHTS, "oneworld", 10);
  expect(JSON.stringify(FLIGHTS)).toBe(before);
});

test("with \"oneworld\", 10", () => {
  expect(bumpDurationMin(FLIGHTS, "oneworld", 10)).toEqual([{"id":1,"number":"AA100","durationMin":594,"delayMin":15,"seats":41,"airline":"skyteam"},{"id":2,"number":"BA117","durationMin":756,"delayMin":103,"seats":23,"airline":"oneworld"},{"id":3,"number":"QF1","durationMin":768,"delayMin":156,"seats":28,"airline":"oneworld"},{"id":4,"number":"AF22","durationMin":92,"delayMin":29,"seats":5,"airline":"star"},{"id":5,"number":"UA90","durationMin":706,"delayMin":2,"seats":8,"airline":"skyteam"},{"id":6,"number":"LH400","durationMin":387,"delayMin":68,"seats":24,"airline":"skyteam"},{"id":7,"number":"DL15","durationMin":61,"delayMin":166,"seats":27,"airline":"skyteam"},{"id":8,"number":"KL641","durationMin":145,"delayMin":7,"seats":15,"airline":"star"}]);
});

test("with \"skyteam\", 1", () => {
  expect(bumpDurationMin(FLIGHTS, "skyteam", 1)).toEqual([{"id":1,"number":"AA100","durationMin":595,"delayMin":15,"seats":41,"airline":"skyteam"},{"id":2,"number":"BA117","durationMin":746,"delayMin":103,"seats":23,"airline":"oneworld"},{"id":3,"number":"QF1","durationMin":758,"delayMin":156,"seats":28,"airline":"oneworld"},{"id":4,"number":"AF22","durationMin":92,"delayMin":29,"seats":5,"airline":"star"},{"id":5,"number":"UA90","durationMin":707,"delayMin":2,"seats":8,"airline":"skyteam"},{"id":6,"number":"LH400","durationMin":388,"delayMin":68,"seats":24,"airline":"skyteam"},{"id":7,"number":"DL15","durationMin":62,"delayMin":166,"seats":27,"airline":"skyteam"},{"id":8,"number":"KL641","durationMin":145,"delayMin":7,"seats":15,"airline":"star"}]);
});
