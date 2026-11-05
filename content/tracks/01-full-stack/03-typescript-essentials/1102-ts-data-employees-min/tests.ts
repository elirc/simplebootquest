const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 109513, yearsAtCompany: 11, team: "data", level: "mid", remote: false},
  {id: 2, name: "Tim", salary: 138232, yearsAtCompany: 6, team: "platform", level: "mid", remote: true},
  {id: 3, name: "Linus", salary: 119841, yearsAtCompany: 5, team: "product", level: "junior", remote: false},
  {id: 4, name: "Alan", salary: 139352, yearsAtCompany: 9, team: "data", level: "mid", remote: false},
  {id: 5, name: "Ken", salary: 149914, yearsAtCompany: 13, team: "product", level: "mid", remote: true},
  {id: 6, name: "Barbara", salary: 152008, yearsAtCompany: 6, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Grace", salary: 120933, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 8, name: "Frances", salary: 74342, yearsAtCompany: 4, team: "data", level: "junior", remote: false}
];

test("an empty list", () => {
  expect(lowestSalary([])).toEqual(null);
});

test("all employees", () => {
  expect(lowestSalary(EMPLOYEES)).toEqual("Frances");
});
