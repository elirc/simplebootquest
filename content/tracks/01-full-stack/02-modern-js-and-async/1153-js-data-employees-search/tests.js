const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 100252, yearsAtCompany: 5, team: "data", level: "junior", remote: false},
  {id: 2, name: "Frances", salary: 155025, yearsAtCompany: 14, team: "data", level: "mid", remote: true},
  {id: 3, name: "Katherine", salary: 94965, yearsAtCompany: 7, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Tim", salary: 104247, yearsAtCompany: 8, team: "product", level: "mid", remote: true},
  {id: 5, name: "Ken", salary: 82445, yearsAtCompany: 7, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Ada", salary: 89644, yearsAtCompany: 7, team: "product", level: "junior", remote: true},
  {id: 7, name: "Grace", salary: 43255, yearsAtCompany: 0, team: "data", level: "mid", remote: false},
  {id: 8, name: "Radia", salary: 76910, yearsAtCompany: 3, team: "product", level: "junior", remote: false}
];

test("with \"da\"", () => {
  expect(searchEmployees(EMPLOYEES, "da")).toEqual(["Ada"]);
});

test("with \"DA\"", () => {
  expect(searchEmployees(EMPLOYEES, "DA")).toEqual(["Ada"]);
});

test("with \"  \"", () => {
  expect(searchEmployees(EMPLOYEES, "  ")).toEqual(["Margaret","Frances","Katherine","Tim","Ken","Ada","Grace","Radia"]);
});

test("with \"zzz\"", () => {
  expect(searchEmployees(EMPLOYEES, "zzz")).toEqual([]);
});
