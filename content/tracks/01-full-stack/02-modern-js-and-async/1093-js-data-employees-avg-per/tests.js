const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 95896, yearsAtCompany: 2, team: "data", level: "senior", remote: false},
  {id: 2, name: "Barbara", salary: 85557, yearsAtCompany: 5, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Dennis", salary: 112542, yearsAtCompany: 9, team: "platform", level: "mid", remote: true},
  {id: 4, name: "Radia", salary: 43844, yearsAtCompany: 2, team: "data", level: "senior", remote: true},
  {id: 5, name: "Frances", salary: 104088, yearsAtCompany: 9, team: "product", level: "junior", remote: true},
  {id: 6, name: "Ken", salary: 122341, yearsAtCompany: 9, team: "platform", level: "senior", remote: false},
  {id: 7, name: "Grace", salary: 101700, yearsAtCompany: 13, team: "data", level: "mid", remote: false},
  {id: 8, name: "Margaret", salary: 105572, yearsAtCompany: 1, team: "platform", level: "senior", remote: false}
];

test("an empty list", () => {
  expect(averageYearsAtCompanyPerLevel([])).toEqual({});
});

test("all employees", () => {
  expect(averageYearsAtCompanyPerLevel(EMPLOYEES)).toEqual({"senior":4,"mid":11,"junior":9});
});
