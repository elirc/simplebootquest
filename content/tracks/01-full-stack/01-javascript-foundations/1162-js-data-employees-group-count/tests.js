const EMPLOYEES = [
  {id: 1, name: "Dennis", salary: 59162, yearsAtCompany: 9, team: "data", level: "senior", remote: true},
  {id: 2, name: "Frances", salary: 61564, yearsAtCompany: 6, team: "product", level: "mid", remote: false},
  {id: 3, name: "Katherine", salary: 148474, yearsAtCompany: 15, team: "data", level: "junior", remote: false},
  {id: 4, name: "Ada", salary: 91967, yearsAtCompany: 11, team: "data", level: "senior", remote: false},
  {id: 5, name: "Tim", salary: 152096, yearsAtCompany: 9, team: "platform", level: "mid", remote: false},
  {id: 6, name: "Grace", salary: 70465, yearsAtCompany: 7, team: "product", level: "mid", remote: true},
  {id: 7, name: "Ken", salary: 130458, yearsAtCompany: 15, team: "platform", level: "junior", remote: false},
  {id: 8, name: "Margaret", salary: 53572, yearsAtCompany: 7, team: "data", level: "junior", remote: true}
];

test("an empty list", () => {
  expect(countEmployeesPerTeam([])).toEqual({});
});

test("all employees", () => {
  expect(countEmployeesPerTeam(EMPLOYEES)).toEqual({"data":4,"product":2,"platform":2});
});
