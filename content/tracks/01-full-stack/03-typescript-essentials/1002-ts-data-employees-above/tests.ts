const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 43412, yearsAtCompany: 15, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Ken", salary: 136177, yearsAtCompany: 4, team: "data", level: "mid", remote: true},
  {id: 3, name: "Katherine", salary: 51601, yearsAtCompany: 13, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Linus", salary: 42892, yearsAtCompany: 11, team: "product", level: "junior", remote: false},
  {id: 5, name: "Tim", salary: 154324, yearsAtCompany: 13, team: "data", level: "junior", remote: true},
  {id: 6, name: "Barbara", salary: 87737, yearsAtCompany: 3, team: "platform", level: "junior", remote: false},
  {id: 7, name: "Margaret", salary: 99350, yearsAtCompany: 14, team: "platform", level: "junior", remote: true},
  {id: 8, name: "Dennis", salary: 150825, yearsAtCompany: 5, team: "data", level: "junior", remote: false}
];

test("with 51601", () => {
  expect(employeesAbove(EMPLOYEES, 51601)).toEqual(["Ken","Tim","Barbara","Margaret","Dennis"]);
});

test("with 99350", () => {
  expect(employeesAbove(EMPLOYEES, 99350)).toEqual(["Ken","Tim","Dennis"]);
});

test("with 999999", () => {
  expect(employeesAbove(EMPLOYEES, 999999)).toEqual([]);
});
