const EMPLOYEES = [
  {id: 1, name: "Grace", salary: 121231, yearsAtCompany: 9, team: "platform", level: "senior", remote: true},
  {id: 2, name: "Dennis", salary: 52231, yearsAtCompany: 3, team: "data", level: "senior", remote: true},
  {id: 3, name: "Alan", salary: 78482, yearsAtCompany: 15, team: "product", level: "junior", remote: false},
  {id: 4, name: "Margaret", salary: 144284, yearsAtCompany: 10, team: "product", level: "mid", remote: true},
  {id: 5, name: "Linus", salary: 147823, yearsAtCompany: 14, team: "data", level: "mid", remote: true},
  {id: 6, name: "Frances", salary: 68553, yearsAtCompany: 8, team: "platform", level: "senior", remote: false},
  {id: 7, name: "Barbara", salary: 103640, yearsAtCompany: 4, team: "product", level: "mid", remote: true},
  {id: 8, name: "Tim", salary: 55731, yearsAtCompany: 7, team: "platform", level: "junior", remote: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EMPLOYEES);
  employeesBySalary(EMPLOYEES);
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});

test("all employees", () => {
  expect(employeesBySalary(EMPLOYEES)).toEqual(["Dennis","Tim","Frances","Alan","Barbara","Grace","Margaret","Linus"]);
});
