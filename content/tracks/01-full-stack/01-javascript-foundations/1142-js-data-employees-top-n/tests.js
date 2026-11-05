const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 145820, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Frances", salary: 67761, yearsAtCompany: 10, team: "product", level: "senior", remote: false},
  {id: 3, name: "Alan", salary: 126304, yearsAtCompany: 14, team: "platform", level: "senior", remote: true},
  {id: 4, name: "Ada", salary: 101198, yearsAtCompany: 7, team: "data", level: "senior", remote: false},
  {id: 5, name: "Tim", salary: 109799, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 6, name: "Grace", salary: 73389, yearsAtCompany: 12, team: "platform", level: "junior", remote: true},
  {id: 7, name: "Ken", salary: 131163, yearsAtCompany: 6, team: "product", level: "senior", remote: true},
  {id: 8, name: "Radia", salary: 103104, yearsAtCompany: 13, team: "data", level: "senior", remote: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EMPLOYEES);
  topEmployeesBySalary(EMPLOYEES, 1);
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});

test("with 1", () => {
  expect(topEmployeesBySalary(EMPLOYEES, 1)).toEqual(["Margaret"]);
});

test("with 3", () => {
  expect(topEmployeesBySalary(EMPLOYEES, 3)).toEqual(["Margaret","Ken","Alan"]);
});

test("with 0", () => {
  expect(topEmployeesBySalary(EMPLOYEES, 0)).toEqual([]);
});
