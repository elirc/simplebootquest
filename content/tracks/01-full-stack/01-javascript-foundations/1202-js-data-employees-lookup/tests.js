const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 64488, yearsAtCompany: 0, team: "product", level: "senior", remote: false},
  {id: 2, name: "Barbara", salary: 108941, yearsAtCompany: 13, team: "product", level: "junior", remote: true},
  {id: 3, name: "Tim", salary: 78657, yearsAtCompany: 1, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Katherine", salary: 95977, yearsAtCompany: 13, team: "product", level: "junior", remote: false},
  {id: 5, name: "Radia", salary: 42991, yearsAtCompany: 4, team: "platform", level: "junior", remote: true},
  {id: 6, name: "Ken", salary: 97469, yearsAtCompany: 13, team: "data", level: "senior", remote: true},
  {id: 7, name: "Dennis", salary: 108138, yearsAtCompany: 8, team: "product", level: "senior", remote: false},
  {id: 8, name: "Ada", salary: 89367, yearsAtCompany: 4, team: "platform", level: "senior", remote: false}
];

test("with \"Tim\"", () => {
  expect(salaryOf(EMPLOYEES, "Tim")).toEqual(78657);
});

test("with \"Nope\"", () => {
  expect(salaryOf(EMPLOYEES, "Nope")).toEqual(null);
});
