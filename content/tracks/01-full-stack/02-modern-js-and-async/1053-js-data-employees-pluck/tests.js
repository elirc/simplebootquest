const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 154568, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 2, name: "Grace", salary: 158371, yearsAtCompany: 2, team: "platform", level: "mid", remote: true},
  {id: 3, name: "Linus", salary: 98273, yearsAtCompany: 10, team: "data", level: "mid", remote: true},
  {id: 4, name: "Barbara", salary: 155814, yearsAtCompany: 14, team: "product", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 155696, yearsAtCompany: 2, team: "platform", level: "junior", remote: true},
  {id: 6, name: "Tim", salary: 151730, yearsAtCompany: 1, team: "product", level: "junior", remote: true},
  {id: 7, name: "Frances", salary: 58477, yearsAtCompany: 3, team: "data", level: "mid", remote: true},
  {id: 8, name: "Margaret", salary: 46961, yearsAtCompany: 5, team: "product", level: "mid", remote: true}
];

test("an empty list", () => {
  expect(summariseEmployees([])).toEqual([]);
});

test("all employees", () => {
  expect(summariseEmployees(EMPLOYEES)).toEqual([{"id":1,"name":"Ada","salary":154568},{"id":2,"name":"Grace","salary":158371},{"id":3,"name":"Linus","salary":98273},{"id":4,"name":"Barbara","salary":155814},{"id":5,"name":"Ken","salary":155696},{"id":6,"name":"Tim","salary":151730},{"id":7,"name":"Frances","salary":58477},{"id":8,"name":"Margaret","salary":46961}]);
});
