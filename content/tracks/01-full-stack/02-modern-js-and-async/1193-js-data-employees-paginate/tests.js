const EMPLOYEES = [
  {id: 1, name: "Barbara", salary: 82917, yearsAtCompany: 4, team: "data", level: "senior", remote: false},
  {id: 2, name: "Alan", salary: 57596, yearsAtCompany: 11, team: "data", level: "junior", remote: true},
  {id: 3, name: "Katherine", salary: 147592, yearsAtCompany: 5, team: "product", level: "mid", remote: true},
  {id: 4, name: "Radia", salary: 135371, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 5, name: "Margaret", salary: 65449, yearsAtCompany: 7, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Ada", salary: 124189, yearsAtCompany: 15, team: "data", level: "mid", remote: true},
  {id: 7, name: "Dennis", salary: 101283, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 8, name: "Ken", salary: 157114, yearsAtCompany: 4, team: "platform", level: "senior", remote: false}
];

test("with 1, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 1, 3)).toEqual({"items":["Barbara","Alan","Katherine"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 2, 3)).toEqual({"items":["Radia","Margaret","Ada"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 3, 3)).toEqual({"items":["Dennis","Ken"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
