const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 122005, yearsAtCompany: 2, team: "platform", level: "senior", remote: true},
  {id: 2, name: "Linus", salary: 91911, yearsAtCompany: 1, team: "data", level: "mid", remote: true},
  {id: 3, name: "Alan", salary: 113571, yearsAtCompany: 11, team: "platform", level: "junior", remote: true},
  {id: 4, name: "Ken", salary: 151881, yearsAtCompany: 6, team: "data", level: "junior", remote: false},
  {id: 5, name: "Ada", salary: 79997, yearsAtCompany: 10, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Margaret", salary: 128142, yearsAtCompany: 3, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Tim", salary: 89716, yearsAtCompany: 4, team: "platform", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 67259, yearsAtCompany: 6, team: "product", level: "senior", remote: false}
];

test("an empty list", () => {
  expect(averageYearsAtCompany([])).toEqual(null);
});

test("all employees", () => {
  expect(averageYearsAtCompany(EMPLOYEES)).toEqual(5.4);
});
