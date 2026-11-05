const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 64390, yearsAtCompany: 1, team: "product", level: "junior", remote: true},
  {id: 2, name: "Katherine", salary: 158368, yearsAtCompany: 5, team: "data", level: "mid", remote: true},
  {id: 3, name: "Tim", salary: 127387, yearsAtCompany: 2, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Grace", salary: 78379, yearsAtCompany: 12, team: "product", level: "mid", remote: false},
  {id: 5, name: "Ada", salary: 105228, yearsAtCompany: 14, team: "data", level: "junior", remote: false},
  {id: 6, name: "Ken", salary: 45104, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 7, name: "Barbara", salary: 123976, yearsAtCompany: 14, team: "product", level: "senior", remote: true},
  {id: 8, name: "Linus", salary: 84318, yearsAtCompany: 2, team: "data", level: "junior", remote: false}
];

test("with \"junior\"", () => {
  expect(countEmployeesByLevel(EMPLOYEES, "junior")).toEqual(4);
});

test("with \"mid\"", () => {
  expect(countEmployeesByLevel(EMPLOYEES, "mid")).toEqual(3);
});

test("with \"senior\"", () => {
  expect(countEmployeesByLevel(EMPLOYEES, "senior")).toEqual(1);
});

test("with \"nope\"", () => {
  expect(countEmployeesByLevel(EMPLOYEES, "nope")).toEqual(0);
});
