const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 104268, yearsAtCompany: 13, team: "data", level: "junior", remote: false},
  {id: 2, name: "Ken", salary: 72038, yearsAtCompany: 12, team: "product", level: "junior", remote: false},
  {id: 3, name: "Ada", salary: 43261, yearsAtCompany: 13, team: "product", level: "mid", remote: false},
  {id: 4, name: "Radia", salary: 118231, yearsAtCompany: 9, team: "product", level: "junior", remote: true},
  {id: 5, name: "Linus", salary: 145287, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 6, name: "Frances", salary: 45960, yearsAtCompany: 2, team: "data", level: "junior", remote: false},
  {id: 7, name: "Grace", salary: 98733, yearsAtCompany: 8, team: "platform", level: "junior", remote: false},
  {id: 8, name: "Alan", salary: 56769, yearsAtCompany: 8, team: "data", level: "mid", remote: false}
];

test("with \"platform\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "platform")).toEqual(1);
});

test("with \"product\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "product")).toEqual(3);
});

test("with \"data\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "data")).toEqual(4);
});

test("with \"nope\"", () => {
  expect(countEmployeesByTeam(EMPLOYEES, "nope")).toEqual(0);
});
