const EMPLOYEES = [
  {id: 1, name: "Grace", salary: 96965, yearsAtCompany: 1, team: "platform", level: "mid", remote: false},
  {id: 2, name: "Radia", salary: 44711, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 3, name: "Ken", salary: 151009, yearsAtCompany: 7, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Alan", salary: 123188, yearsAtCompany: 14, team: "product", level: "junior", remote: false},
  {id: 5, name: "Ada", salary: 123197, yearsAtCompany: 6, team: "product", level: "senior", remote: true},
  {id: 6, name: "Tim", salary: 44457, yearsAtCompany: 4, team: "product", level: "senior", remote: false},
  {id: 7, name: "Barbara", salary: 120161, yearsAtCompany: 10, team: "platform", level: "mid", remote: true},
  {id: 8, name: "Dennis", salary: 42601, yearsAtCompany: 7, team: "platform", level: "junior", remote: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(EMPLOYEES);
  bumpSalary(EMPLOYEES, "platform", 10);
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});

test("with \"platform\", 10", () => {
  expect(bumpSalary(EMPLOYEES, "platform", 10)).toEqual([{"id":1,"name":"Grace","salary":96975,"yearsAtCompany":1,"team":"platform","level":"mid","remote":false},{"id":2,"name":"Radia","salary":44721,"yearsAtCompany":13,"team":"platform","level":"junior","remote":true},{"id":3,"name":"Ken","salary":151019,"yearsAtCompany":7,"team":"platform","level":"mid","remote":false},{"id":4,"name":"Alan","salary":123188,"yearsAtCompany":14,"team":"product","level":"junior","remote":false},{"id":5,"name":"Ada","salary":123197,"yearsAtCompany":6,"team":"product","level":"senior","remote":true},{"id":6,"name":"Tim","salary":44457,"yearsAtCompany":4,"team":"product","level":"senior","remote":false},{"id":7,"name":"Barbara","salary":120171,"yearsAtCompany":10,"team":"platform","level":"mid","remote":true},{"id":8,"name":"Dennis","salary":42611,"yearsAtCompany":7,"team":"platform","level":"junior","remote":true}]);
});

test("with \"product\", 1", () => {
  expect(bumpSalary(EMPLOYEES, "product", 1)).toEqual([{"id":1,"name":"Grace","salary":96965,"yearsAtCompany":1,"team":"platform","level":"mid","remote":false},{"id":2,"name":"Radia","salary":44711,"yearsAtCompany":13,"team":"platform","level":"junior","remote":true},{"id":3,"name":"Ken","salary":151009,"yearsAtCompany":7,"team":"platform","level":"mid","remote":false},{"id":4,"name":"Alan","salary":123189,"yearsAtCompany":14,"team":"product","level":"junior","remote":false},{"id":5,"name":"Ada","salary":123198,"yearsAtCompany":6,"team":"product","level":"senior","remote":true},{"id":6,"name":"Tim","salary":44458,"yearsAtCompany":4,"team":"product","level":"senior","remote":false},{"id":7,"name":"Barbara","salary":120161,"yearsAtCompany":10,"team":"platform","level":"mid","remote":true},{"id":8,"name":"Dennis","salary":42601,"yearsAtCompany":7,"team":"platform","level":"junior","remote":true}]);
});
