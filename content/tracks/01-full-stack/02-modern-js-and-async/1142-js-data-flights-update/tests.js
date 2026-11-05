const FLIGHTS = [
  {id: 1, number: "IB6251", durationMin: 588, delayMin: 17, seats: 35, airline: "oneworld"},
  {id: 2, number: "SQ25", durationMin: 631, delayMin: 2, seats: 3, airline: "star"},
  {id: 3, number: "UA90", durationMin: 158, delayMin: 69, seats: 15, airline: "star"},
  {id: 4, number: "EK3", durationMin: 345, delayMin: 141, seats: 22, airline: "skyteam"},
  {id: 5, number: "BA117", durationMin: 635, delayMin: 123, seats: 36, airline: "star"},
  {id: 6, number: "LH400", durationMin: 790, delayMin: 150, seats: 20, airline: "star"},
  {id: 7, number: "TK1", durationMin: 246, delayMin: 102, seats: 1, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 528, delayMin: 5, seats: 2, airline: "star"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(FLIGHTS);
  bumpDurationMin(FLIGHTS, "oneworld", 10);
  expect(JSON.stringify(FLIGHTS)).toBe(before);
});

test("with \"oneworld\", 10", () => {
  expect(bumpDurationMin(FLIGHTS, "oneworld", 10)).toEqual([{"id":1,"number":"IB6251","durationMin":598,"delayMin":17,"seats":35,"airline":"oneworld"},{"id":2,"number":"SQ25","durationMin":631,"delayMin":2,"seats":3,"airline":"star"},{"id":3,"number":"UA90","durationMin":158,"delayMin":69,"seats":15,"airline":"star"},{"id":4,"number":"EK3","durationMin":345,"delayMin":141,"seats":22,"airline":"skyteam"},{"id":5,"number":"BA117","durationMin":635,"delayMin":123,"seats":36,"airline":"star"},{"id":6,"number":"LH400","durationMin":790,"delayMin":150,"seats":20,"airline":"star"},{"id":7,"number":"TK1","durationMin":246,"delayMin":102,"seats":1,"airline":"skyteam"},{"id":8,"number":"KL641","durationMin":528,"delayMin":5,"seats":2,"airline":"star"}]);
});

test("with \"skyteam\", 1", () => {
  expect(bumpDurationMin(FLIGHTS, "skyteam", 1)).toEqual([{"id":1,"number":"IB6251","durationMin":588,"delayMin":17,"seats":35,"airline":"oneworld"},{"id":2,"number":"SQ25","durationMin":631,"delayMin":2,"seats":3,"airline":"star"},{"id":3,"number":"UA90","durationMin":158,"delayMin":69,"seats":15,"airline":"star"},{"id":4,"number":"EK3","durationMin":346,"delayMin":141,"seats":22,"airline":"skyteam"},{"id":5,"number":"BA117","durationMin":635,"delayMin":123,"seats":36,"airline":"star"},{"id":6,"number":"LH400","durationMin":790,"delayMin":150,"seats":20,"airline":"star"},{"id":7,"number":"TK1","durationMin":247,"delayMin":102,"seats":1,"airline":"skyteam"},{"id":8,"number":"KL641","durationMin":528,"delayMin":5,"seats":2,"airline":"star"}]);
});
