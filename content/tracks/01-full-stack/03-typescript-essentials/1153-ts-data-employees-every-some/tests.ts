const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 99379, yearsAtCompany: 0, team: "data", level: "mid", remote: true},
  {id: 2, name: "Ada", salary: 55635, yearsAtCompany: 9, team: "data", level: "junior", remote: true},
  {id: 3, name: "Linus", salary: 78759, yearsAtCompany: 9, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Radia", salary: 87830, yearsAtCompany: 3, team: "platform", level: "junior", remote: false},
  {id: 5, name: "Barbara", salary: 116161, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Grace", salary: 156105, yearsAtCompany: 12, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Frances", salary: 137958, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 8, name: "Dennis", salary: 152206, yearsAtCompany: 15, team: "product", level: "junior", remote: true}
];

test("with 3", () => {
  expect(allEmployeesUnder(EMPLOYEES, 3)).toEqual(false);
});

test("with 16", () => {
  expect(allEmployeesUnder(EMPLOYEES, 16)).toEqual(true);
});

test("with 15", () => {
  expect(allEmployeesUnder(EMPLOYEES, 15)).toEqual(false);
});
