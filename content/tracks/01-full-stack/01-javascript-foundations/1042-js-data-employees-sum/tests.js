const EMPLOYEES = [
  {id: 1, name: "Dennis", salary: 76336, yearsAtCompany: 13, team: "data", level: "junior", remote: false},
  {id: 2, name: "Ada", salary: 96053, yearsAtCompany: 0, team: "platform", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 133048, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 4, name: "Barbara", salary: 92189, yearsAtCompany: 4, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Frances", salary: 81690, yearsAtCompany: 12, team: "data", level: "mid", remote: true},
  {id: 6, name: "Tim", salary: 72869, yearsAtCompany: 12, team: "data", level: "junior", remote: false},
  {id: 7, name: "Linus", salary: 123307, yearsAtCompany: 10, team: "product", level: "mid", remote: false},
  {id: 8, name: "Ken", salary: 55039, yearsAtCompany: 6, team: "data", level: "mid", remote: false}
];

test("an empty list", () => {
  expect(totalYearsAtCompany([])).toEqual(0);
});

test("all employees", () => {
  expect(totalYearsAtCompany(EMPLOYEES)).toEqual(66);
});
