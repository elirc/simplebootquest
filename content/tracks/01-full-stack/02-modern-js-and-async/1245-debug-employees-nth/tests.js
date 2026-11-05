const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 58151, yearsAtCompany: 4, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Grace", salary: 85606, yearsAtCompany: 7, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Radia", salary: 130927, yearsAtCompany: 7, team: "data", level: "senior", remote: true},
  {id: 4, name: "Alan", salary: 57219, yearsAtCompany: 6, team: "platform", level: "junior", remote: false},
  {id: 5, name: "Linus", salary: 143300, yearsAtCompany: 10, team: "data", level: "mid", remote: true},
  {id: 6, name: "Katherine", salary: 154345, yearsAtCompany: 12, team: "data", level: "junior", remote: true},
  {id: 7, name: "Frances", salary: 154639, yearsAtCompany: 3, team: "platform", level: "junior", remote: true},
  {id: 8, name: "Barbara", salary: 93911, yearsAtCompany: 13, team: "product", level: "mid", remote: false}
];

test("with 1", () => {
  expect(nthBySalary(EMPLOYEES, 1)).toEqual("Frances");
});

test("with 2", () => {
  expect(nthBySalary(EMPLOYEES, 2)).toEqual("Katherine");
});

test("with 5", () => {
  expect(nthBySalary(EMPLOYEES, 5)).toEqual("Barbara");
});

test("with 0", () => {
  expect(nthBySalary(EMPLOYEES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthBySalary(EMPLOYEES, 99)).toEqual(null);
});
