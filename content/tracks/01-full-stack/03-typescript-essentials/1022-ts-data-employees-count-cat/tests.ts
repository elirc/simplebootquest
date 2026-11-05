const EMPLOYEES = [
  {id: 1, name: "Ken", salary: 153411, yearsAtCompany: 9, team: "data", level: "mid", remote: false},
  {id: 2, name: "Katherine", salary: 69320, yearsAtCompany: 13, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Ada", salary: 100866, yearsAtCompany: 3, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Dennis", salary: 54124, yearsAtCompany: 10, team: "data", level: "junior", remote: true},
  {id: 5, name: "Linus", salary: 70162, yearsAtCompany: 4, team: "data", level: "senior", remote: false},
  {id: 6, name: "Margaret", salary: 73761, yearsAtCompany: 6, team: "product", level: "senior", remote: false},
  {id: 7, name: "Grace", salary: 83129, yearsAtCompany: 1, team: "product", level: "junior", remote: false},
  {id: 8, name: "Alan", salary: 140918, yearsAtCompany: 10, team: "platform", level: "mid", remote: true}
];

test("with \"platform\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "platform")).toEqual(3);
});

test("with \"product\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "product")).toEqual(2);
});

test("with \"data\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "data")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "nope")).toEqual(0);
});
