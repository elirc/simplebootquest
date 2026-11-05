const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 129711, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 2, name: "Ken", salary: 83597, yearsAtCompany: 15, team: "data", level: "senior", remote: false},
  {id: 3, name: "Dennis", salary: 81430, yearsAtCompany: 5, team: "product", level: "senior", remote: true},
  {id: 4, name: "Katherine", salary: 96653, yearsAtCompany: 10, team: "product", level: "senior", remote: false},
  {id: 5, name: "Grace", salary: 146403, yearsAtCompany: 1, team: "data", level: "senior", remote: true},
  {id: 6, name: "Alan", salary: 91877, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 7, name: "Linus", salary: 121375, yearsAtCompany: 1, team: "data", level: "senior", remote: false},
  {id: 8, name: "Frances", salary: 46679, yearsAtCompany: 1, team: "product", level: "mid", remote: true}
];

test("with \"platform\"", () => {
  expect(employeesInTeamRanked(EMPLOYEES, "platform")).toEqual(["Ada"]);
});

test("with \"product\"", () => {
  expect(employeesInTeamRanked(EMPLOYEES, "product")).toEqual(["Katherine","Dennis","Frances"]);
});

test("with \"data\"", () => {
  expect(employeesInTeamRanked(EMPLOYEES, "data")).toEqual(["Ken","Alan","Grace","Linus"]);
});
