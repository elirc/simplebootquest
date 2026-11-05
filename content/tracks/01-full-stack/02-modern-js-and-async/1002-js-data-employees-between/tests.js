const EMPLOYEES = [
  {id: 1, name: "Barbara", salary: 118731, yearsAtCompany: 14, team: "data", level: "senior", remote: true},
  {id: 2, name: "Ada", salary: 77581, yearsAtCompany: 7, team: "product", level: "senior", remote: false},
  {id: 3, name: "Radia", salary: 87793, yearsAtCompany: 3, team: "platform", level: "mid", remote: true},
  {id: 4, name: "Linus", salary: 50245, yearsAtCompany: 7, team: "data", level: "junior", remote: true},
  {id: 5, name: "Tim", salary: 47030, yearsAtCompany: 15, team: "product", level: "senior", remote: false},
  {id: 6, name: "Katherine", salary: 87995, yearsAtCompany: 9, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Ken", salary: 63834, yearsAtCompany: 1, team: "product", level: "mid", remote: true},
  {id: 8, name: "Dennis", salary: 122303, yearsAtCompany: 9, team: "platform", level: "junior", remote: false}
];

test("with 7, 9", () => {
  expect(employeesInRange(EMPLOYEES, 7, 9)).toEqual(["Ada","Linus","Katherine","Dennis"]);
});

test("with 9, 9", () => {
  expect(employeesInRange(EMPLOYEES, 9, 9)).toEqual(["Katherine","Dennis"]);
});

test("with 7, 7", () => {
  expect(employeesInRange(EMPLOYEES, 7, 7)).toEqual(["Ada","Linus"]);
});
