const EMPLOYEES = [
  {id: 1, name: "Tim", salary: 100008, yearsAtCompany: 12, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Katherine", salary: 134237, yearsAtCompany: 4, team: "data", level: "junior", remote: false},
  {id: 3, name: "Barbara", salary: 63281, yearsAtCompany: 13, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Margaret", salary: 108501, yearsAtCompany: 13, team: "product", level: "senior", remote: true},
  {id: 5, name: "Radia", salary: 70606, yearsAtCompany: 14, team: "data", level: "senior", remote: false},
  {id: 6, name: "Alan", salary: 134920, yearsAtCompany: 3, team: "product", level: "mid", remote: true},
  {id: 7, name: "Ken", salary: 125891, yearsAtCompany: 4, team: "platform", level: "mid", remote: true},
  {id: 8, name: "Grace", salary: 48043, yearsAtCompany: 5, team: "data", level: "junior", remote: true}
];

test("an empty list", () => {
  expect(totalSalary([])).toEqual(0);
});

test("all employees", () => {
  expect(totalSalary(EMPLOYEES)).toEqual(785487);
});
