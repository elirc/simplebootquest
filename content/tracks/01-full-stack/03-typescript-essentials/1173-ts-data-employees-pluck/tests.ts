const EMPLOYEES = [
  {id: 1, name: "Ken", salary: 114856, yearsAtCompany: 6, team: "product", level: "mid", remote: true},
  {id: 2, name: "Barbara", salary: 48015, yearsAtCompany: 2, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Frances", salary: 43616, yearsAtCompany: 4, team: "platform", level: "junior", remote: true},
  {id: 4, name: "Grace", salary: 118463, yearsAtCompany: 9, team: "product", level: "junior", remote: false},
  {id: 5, name: "Dennis", salary: 149765, yearsAtCompany: 13, team: "data", level: "senior", remote: false},
  {id: 6, name: "Alan", salary: 108234, yearsAtCompany: 6, team: "data", level: "senior", remote: false},
  {id: 7, name: "Linus", salary: 80290, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 8, name: "Tim", salary: 96280, yearsAtCompany: 1, team: "product", level: "senior", remote: true}
];

test("an empty list", () => {
  expect(summariseEmployees([])).toEqual([]);
});

test("all employees", () => {
  expect(summariseEmployees(EMPLOYEES)).toEqual([{"id":1,"name":"Ken","salary":114856},{"id":2,"name":"Barbara","salary":48015},{"id":3,"name":"Frances","salary":43616},{"id":4,"name":"Grace","salary":118463},{"id":5,"name":"Dennis","salary":149765},{"id":6,"name":"Alan","salary":108234},{"id":7,"name":"Linus","salary":80290},{"id":8,"name":"Tim","salary":96280}]);
});
