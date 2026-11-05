const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 107767, yearsAtCompany: 10, team: "product", level: "mid", remote: false},
  {id: 2, name: "Frances", salary: 69466, yearsAtCompany: 4, team: "product", level: "senior", remote: true},
  {id: 3, name: "Barbara", salary: 47872, yearsAtCompany: 1, team: "data", level: "mid", remote: false},
  {id: 4, name: "Ken", salary: 55787, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Katherine", salary: 94146, yearsAtCompany: 2, team: "product", level: "junior", remote: false},
  {id: 6, name: "Grace", salary: 63076, yearsAtCompany: 2, team: "data", level: "mid", remote: false},
  {id: 7, name: "Dennis", salary: 57898, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 8, name: "Radia", salary: 95034, yearsAtCompany: 8, team: "data", level: "mid", remote: true}
];

test("with 1", () => {
  expect(nthBySalary(EMPLOYEES, 1)).toEqual("Alan");
});

test("with 2", () => {
  expect(nthBySalary(EMPLOYEES, 2)).toEqual("Radia");
});

test("with 5", () => {
  expect(nthBySalary(EMPLOYEES, 5)).toEqual("Grace");
});

test("with 0", () => {
  expect(nthBySalary(EMPLOYEES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthBySalary(EMPLOYEES, 99)).toEqual(null);
});
