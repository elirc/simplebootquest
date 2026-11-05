const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 94142, yearsAtCompany: 14, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Frances", salary: 50551, yearsAtCompany: 11, team: "product", level: "mid", remote: true},
  {id: 3, name: "Dennis", salary: 83410, yearsAtCompany: 0, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Katherine", salary: 58172, yearsAtCompany: 3, team: "product", level: "mid", remote: false},
  {id: 5, name: "Ken", salary: 128300, yearsAtCompany: 14, team: "platform", level: "mid", remote: true},
  {id: 6, name: "Linus", salary: 98184, yearsAtCompany: 7, team: "product", level: "junior", remote: true},
  {id: 7, name: "Alan", salary: 155096, yearsAtCompany: 1, team: "product", level: "senior", remote: true},
  {id: 8, name: "Grace", salary: 81059, yearsAtCompany: 13, team: "data", level: "senior", remote: true}
];

test("an empty list", () => {
  expect(salaryPerLevel([])).toEqual({});
});

test("all employees", () => {
  expect(salaryPerLevel(EMPLOYEES)).toEqual({"junior":275736,"mid":237023,"senior":236155});
});
