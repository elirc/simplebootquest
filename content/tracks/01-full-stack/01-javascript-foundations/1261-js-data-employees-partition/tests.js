const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 142149, yearsAtCompany: 9, team: "product", level: "mid", remote: true},
  {id: 2, name: "Grace", salary: 127220, yearsAtCompany: 5, team: "platform", level: "junior", remote: true},
  {id: 3, name: "Katherine", salary: 144204, yearsAtCompany: 10, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Frances", salary: 58139, yearsAtCompany: 8, team: "data", level: "junior", remote: false},
  {id: 5, name: "Radia", salary: 51433, yearsAtCompany: 14, team: "platform", level: "junior", remote: false},
  {id: 6, name: "Tim", salary: 95176, yearsAtCompany: 13, team: "data", level: "junior", remote: false},
  {id: 7, name: "Ken", salary: 79166, yearsAtCompany: 8, team: "product", level: "senior", remote: false},
  {id: 8, name: "Linus", salary: 98074, yearsAtCompany: 0, team: "data", level: "mid", remote: false}
];

test("an empty list", () => {
  expect(splitEmployeesByRemote([])).toEqual({"yes":[],"no":[]});
});

test("all employees", () => {
  expect(splitEmployeesByRemote(EMPLOYEES)).toEqual({"yes":["Margaret","Grace"],"no":["Katherine","Frances","Radia","Tim","Ken","Linus"]});
});
