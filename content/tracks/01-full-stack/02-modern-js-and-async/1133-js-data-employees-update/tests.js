const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 91194, yearsAtCompany: 12, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Radia", salary: 54826, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 3, name: "Barbara", salary: 45551, yearsAtCompany: 11, team: "product", level: "junior", remote: true},
  {id: 4, name: "Margaret", salary: 59320, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 5, name: "Dennis", salary: 124789, yearsAtCompany: 13, team: "data", level: "mid", remote: false},
  {id: 6, name: "Alan", salary: 75465, yearsAtCompany: 3, team: "product", level: "senior", remote: true},
  {id: 7, name: "Linus", salary: 55948, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 8, name: "Ken", salary: 158925, yearsAtCompany: 13, team: "platform", level: "junior", remote: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EMPLOYEES);
  bumpSalary(EMPLOYEES, "junior", 10);
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});

test("with \"junior\", 10", () => {
  expect(bumpSalary(EMPLOYEES, "junior", 10)).toEqual([{"id":1,"name":"Frances","salary":91204,"yearsAtCompany":12,"team":"platform","level":"junior","remote":true},{"id":2,"name":"Radia","salary":54826,"yearsAtCompany":9,"team":"product","level":"senior","remote":false},{"id":3,"name":"Barbara","salary":45561,"yearsAtCompany":11,"team":"product","level":"junior","remote":true},{"id":4,"name":"Margaret","salary":59320,"yearsAtCompany":3,"team":"data","level":"mid","remote":true},{"id":5,"name":"Dennis","salary":124789,"yearsAtCompany":13,"team":"data","level":"mid","remote":false},{"id":6,"name":"Alan","salary":75465,"yearsAtCompany":3,"team":"product","level":"senior","remote":true},{"id":7,"name":"Linus","salary":55948,"yearsAtCompany":6,"team":"platform","level":"mid","remote":false},{"id":8,"name":"Ken","salary":158935,"yearsAtCompany":13,"team":"platform","level":"junior","remote":false}]);
});

test("with \"mid\", 1", () => {
  expect(bumpSalary(EMPLOYEES, "mid", 1)).toEqual([{"id":1,"name":"Frances","salary":91194,"yearsAtCompany":12,"team":"platform","level":"junior","remote":true},{"id":2,"name":"Radia","salary":54826,"yearsAtCompany":9,"team":"product","level":"senior","remote":false},{"id":3,"name":"Barbara","salary":45551,"yearsAtCompany":11,"team":"product","level":"junior","remote":true},{"id":4,"name":"Margaret","salary":59321,"yearsAtCompany":3,"team":"data","level":"mid","remote":true},{"id":5,"name":"Dennis","salary":124790,"yearsAtCompany":13,"team":"data","level":"mid","remote":false},{"id":6,"name":"Alan","salary":75465,"yearsAtCompany":3,"team":"product","level":"senior","remote":true},{"id":7,"name":"Linus","salary":55949,"yearsAtCompany":6,"team":"platform","level":"mid","remote":false},{"id":8,"name":"Ken","salary":158925,"yearsAtCompany":13,"team":"platform","level":"junior","remote":false}]);
});
