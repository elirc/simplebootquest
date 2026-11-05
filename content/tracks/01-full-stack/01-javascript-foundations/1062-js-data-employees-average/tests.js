const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 142068, yearsAtCompany: 0, team: "data", level: "junior", remote: true},
  {id: 2, name: "Barbara", salary: 137043, yearsAtCompany: 5, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Katherine", salary: 96261, yearsAtCompany: 6, team: "data", level: "junior", remote: false},
  {id: 4, name: "Radia", salary: 87632, yearsAtCompany: 0, team: "data", level: "senior", remote: true},
  {id: 5, name: "Tim", salary: 93642, yearsAtCompany: 4, team: "platform", level: "junior", remote: true},
  {id: 6, name: "Linus", salary: 98692, yearsAtCompany: 14, team: "product", level: "mid", remote: true},
  {id: 7, name: "Dennis", salary: 85986, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 8, name: "Ada", salary: 147887, yearsAtCompany: 5, team: "platform", level: "mid", remote: true}
];

test("an empty list", () => {
  expect(averageYearsAtCompany([])).toEqual(null);
});

test("all employees", () => {
  expect(averageYearsAtCompany(EMPLOYEES)).toEqual(5.9);
});
