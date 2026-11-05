const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 60394, yearsAtCompany: 2, team: "product", level: "senior", remote: true},
  {id: 2, name: "Dennis", salary: 46708, yearsAtCompany: 2, team: "data", level: "mid", remote: true},
  {id: 3, name: "Grace", salary: 115674, yearsAtCompany: 14, team: "product", level: "mid", remote: true},
  {id: 4, name: "Ken", salary: 94802, yearsAtCompany: 9, team: "data", level: "senior", remote: true},
  {id: 5, name: "Katherine", salary: 143594, yearsAtCompany: 12, team: "product", level: "mid", remote: true},
  {id: 6, name: "Linus", salary: 87093, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 7, name: "Radia", salary: 42333, yearsAtCompany: 5, team: "product", level: "senior", remote: false},
  {id: 8, name: "Alan", salary: 110809, yearsAtCompany: 4, team: "data", level: "mid", remote: true}
];

test("an empty list", () => {
  expect(highestSalary([])).toEqual(null);
});

test("all employees", () => {
  expect(highestSalary(EMPLOYEES)).toEqual("Katherine");
});
