const EMPLOYEES = [
  {id: 1, name: "Dennis", salary: 47101, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 2, name: "Ken", salary: 47940, yearsAtCompany: 2, team: "platform", level: "junior", remote: false},
  {id: 3, name: "Linus", salary: 84964, yearsAtCompany: 5, team: "platform", level: "senior", remote: true},
  {id: 4, name: "Ada", salary: 146346, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 5, name: "Barbara", salary: 64168, yearsAtCompany: 7, team: "product", level: "mid", remote: true},
  {id: 6, name: "Katherine", salary: 47506, yearsAtCompany: 1, team: "platform", level: "junior", remote: false},
  {id: 7, name: "Radia", salary: 87880, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 144840, yearsAtCompany: 3, team: "platform", level: "junior", remote: false}
];

test("with 47940", () => {
  expect(allEmployeesUnder(EMPLOYEES, 47940)).toEqual(false);
});

test("with 146347", () => {
  expect(allEmployeesUnder(EMPLOYEES, 146347)).toEqual(true);
});

test("with 146346", () => {
  expect(allEmployeesUnder(EMPLOYEES, 146346)).toEqual(false);
});
