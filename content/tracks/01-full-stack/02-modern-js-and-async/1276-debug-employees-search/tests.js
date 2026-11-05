const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 137059, yearsAtCompany: 5, team: "product", level: "senior", remote: true},
  {id: 2, name: "Ken", salary: 116867, yearsAtCompany: 10, team: "data", level: "senior", remote: true},
  {id: 3, name: "Alan", salary: 98784, yearsAtCompany: 3, team: "product", level: "senior", remote: true},
  {id: 4, name: "Katherine", salary: 126690, yearsAtCompany: 15, team: "platform", level: "junior", remote: true},
  {id: 5, name: "Barbara", salary: 125835, yearsAtCompany: 3, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Frances", salary: 120117, yearsAtCompany: 7, team: "product", level: "mid", remote: false},
  {id: 7, name: "Linus", salary: 45148, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 8, name: "Margaret", salary: 156508, yearsAtCompany: 12, team: "product", level: "mid", remote: true}
];

test("with \"at\"", () => {
  expect(searchEmployees(EMPLOYEES, "at")).toEqual(["Katherine"]);
});

test("with \"AT\"", () => {
  expect(searchEmployees(EMPLOYEES, "AT")).toEqual(["Katherine"]);
});

test("with \"  \"", () => {
  expect(searchEmployees(EMPLOYEES, "  ")).toEqual(["Ada","Ken","Alan","Katherine","Barbara","Frances","Linus","Margaret"]);
});

test("with \"zzz\"", () => {
  expect(searchEmployees(EMPLOYEES, "zzz")).toEqual([]);
});
