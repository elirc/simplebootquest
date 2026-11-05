const EMPLOYEES = [
  {id: 1, name: "Tim", salary: 157195, yearsAtCompany: 11, team: "product", level: "senior", remote: false},
  {id: 2, name: "Linus", salary: 98066, yearsAtCompany: 15, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Ken", salary: 102027, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 4, name: "Dennis", salary: 67581, yearsAtCompany: 13, team: "product", level: "junior", remote: false},
  {id: 5, name: "Frances", salary: 124713, yearsAtCompany: 8, team: "data", level: "mid", remote: true},
  {id: 6, name: "Grace", salary: 43453, yearsAtCompany: 6, team: "product", level: "senior", remote: false},
  {id: 7, name: "Ada", salary: 131167, yearsAtCompany: 8, team: "data", level: "mid", remote: true},
  {id: 8, name: "Margaret", salary: 135644, yearsAtCompany: 8, team: "data", level: "senior", remote: false}
];

test("with \"Ada\"", () => {
  expect(salaryOf(EMPLOYEES, "Ada")).toEqual(131167);
});

test("with \"Nope\"", () => {
  expect(salaryOf(EMPLOYEES, "Nope")).toEqual(null);
});
