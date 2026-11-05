const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 125917, yearsAtCompany: 0, team: "product", level: "senior", remote: false},
  {id: 2, name: "Alan", salary: 116408, yearsAtCompany: 0, team: "data", level: "junior", remote: false},
  {id: 3, name: "Margaret", salary: 61586, yearsAtCompany: 12, team: "product", level: "senior", remote: true},
  {id: 4, name: "Ada", salary: 133067, yearsAtCompany: 14, team: "data", level: "junior", remote: false},
  {id: 5, name: "Grace", salary: 44044, yearsAtCompany: 4, team: "platform", level: "senior", remote: false},
  {id: 6, name: "Barbara", salary: 99398, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 7, name: "Dennis", salary: 79019, yearsAtCompany: 4, team: "platform", level: "mid", remote: true},
  {id: 8, name: "Linus", salary: 121008, yearsAtCompany: 13, team: "platform", level: "junior", remote: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EMPLOYEES);
  employeesBySalary(EMPLOYEES);
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});

test("all employees", () => {
  expect(employeesBySalary(EMPLOYEES)).toEqual(["Grace","Margaret","Dennis","Barbara","Alan","Linus","Katherine","Ada"]);
});
