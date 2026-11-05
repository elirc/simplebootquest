const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 107988, yearsAtCompany: 2, team: "product", level: "senior", remote: false},
  {id: 2, name: "Katherine", salary: 46005, yearsAtCompany: 11, team: "product", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 43061, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 4, name: "Alan", salary: 127854, yearsAtCompany: 7, team: "platform", level: "senior", remote: true},
  {id: 5, name: "Barbara", salary: 60149, yearsAtCompany: 10, team: "data", level: "senior", remote: true},
  {id: 6, name: "Linus", salary: 84817, yearsAtCompany: 3, team: "data", level: "senior", remote: false},
  {id: 7, name: "Tim", salary: 113635, yearsAtCompany: 15, team: "platform", level: "junior", remote: false},
  {id: 8, name: "Dennis", salary: 47682, yearsAtCompany: 5, team: "product", level: "senior", remote: true}
];

test("an empty list", () => {
  expect(averageYearsAtCompany([])).toEqual(null);
});

test("all employees", () => {
  expect(averageYearsAtCompany(EMPLOYEES)).toEqual(7);
});
