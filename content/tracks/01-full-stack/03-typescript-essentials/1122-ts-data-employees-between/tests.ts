const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 133899, yearsAtCompany: 8, team: "platform", level: "senior", remote: false},
  {id: 2, name: "Dennis", salary: 85096, yearsAtCompany: 9, team: "data", level: "senior", remote: false},
  {id: 3, name: "Tim", salary: 61285, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Katherine", salary: 64281, yearsAtCompany: 8, team: "product", level: "mid", remote: true},
  {id: 5, name: "Alan", salary: 131843, yearsAtCompany: 6, team: "data", level: "senior", remote: false},
  {id: 6, name: "Frances", salary: 143410, yearsAtCompany: 10, team: "platform", level: "mid", remote: false},
  {id: 7, name: "Margaret", salary: 91499, yearsAtCompany: 13, team: "product", level: "senior", remote: false},
  {id: 8, name: "Radia", salary: 110023, yearsAtCompany: 13, team: "product", level: "senior", remote: false}
];

test("with 85096, 110023", () => {
  expect(employeesInRange(EMPLOYEES, 85096, 110023)).toEqual(["Dennis","Margaret","Radia"]);
});

test("with 110023, 131843", () => {
  expect(employeesInRange(EMPLOYEES, 110023, 131843)).toEqual(["Alan","Radia"]);
});

test("with 85096, 85096", () => {
  expect(employeesInRange(EMPLOYEES, 85096, 85096)).toEqual(["Dennis"]);
});
