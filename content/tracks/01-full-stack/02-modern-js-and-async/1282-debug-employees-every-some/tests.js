const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 48666, yearsAtCompany: 14, team: "product", level: "junior", remote: true},
  {id: 2, name: "Grace", salary: 83379, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 3, name: "Tim", salary: 154216, yearsAtCompany: 6, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Ada", salary: 146192, yearsAtCompany: 11, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Katherine", salary: 44990, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Alan", salary: 47940, yearsAtCompany: 5, team: "data", level: "senior", remote: true},
  {id: 7, name: "Dennis", salary: 77423, yearsAtCompany: 6, team: "data", level: "junior", remote: true},
  {id: 8, name: "Linus", salary: 124697, yearsAtCompany: 4, team: "product", level: "senior", remote: true}
];

test("with 6", () => {
  expect(allEmployeesUnder(EMPLOYEES, 6)).toEqual(false);
});

test("with 15", () => {
  expect(allEmployeesUnder(EMPLOYEES, 15)).toEqual(true);
});

test("with 14", () => {
  expect(allEmployeesUnder(EMPLOYEES, 14)).toEqual(false);
});
