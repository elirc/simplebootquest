const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 44612, yearsAtCompany: 11, team: "data", level: "junior", remote: true},
  {id: 2, name: "Frances", salary: 149875, yearsAtCompany: 13, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Barbara", salary: 103005, yearsAtCompany: 11, team: "platform", level: "mid", remote: true},
  {id: 4, name: "Ken", salary: 71582, yearsAtCompany: 3, team: "product", level: "junior", remote: true},
  {id: 5, name: "Radia", salary: 113200, yearsAtCompany: 3, team: "product", level: "junior", remote: true},
  {id: 6, name: "Linus", salary: 132323, yearsAtCompany: 10, team: "data", level: "mid", remote: true},
  {id: 7, name: "Tim", salary: 87017, yearsAtCompany: 1, team: "data", level: "senior", remote: false},
  {id: 8, name: "Margaret", salary: 118552, yearsAtCompany: 13, team: "platform", level: "mid", remote: true}
];

test("with 87017", () => {
  expect(employeesAbove(EMPLOYEES, 87017)).toEqual(["Frances","Barbara","Radia","Linus","Margaret"]);
});

test("with 113200", () => {
  expect(employeesAbove(EMPLOYEES, 113200)).toEqual(["Frances","Linus","Margaret"]);
});

test("with 999999", () => {
  expect(employeesAbove(EMPLOYEES, 999999)).toEqual([]);
});
