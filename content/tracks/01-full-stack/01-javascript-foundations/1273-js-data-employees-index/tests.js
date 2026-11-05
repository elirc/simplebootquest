const EMPLOYEES = [
  {id: 1, name: "Radia", salary: 122434, yearsAtCompany: 7, team: "data", level: "senior", remote: true},
  {id: 2, name: "Linus", salary: 44879, yearsAtCompany: 6, team: "product", level: "mid", remote: true},
  {id: 3, name: "Tim", salary: 85276, yearsAtCompany: 12, team: "data", level: "senior", remote: false},
  {id: 4, name: "Dennis", salary: 81795, yearsAtCompany: 1, team: "product", level: "junior", remote: false},
  {id: 5, name: "Ken", salary: 95768, yearsAtCompany: 14, team: "data", level: "mid", remote: false},
  {id: 6, name: "Ada", salary: 48786, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 7, name: "Alan", salary: 84951, yearsAtCompany: 4, team: "product", level: "junior", remote: true},
  {id: 8, name: "Frances", salary: 100018, yearsAtCompany: 8, team: "platform", level: "senior", remote: true}
];

test("an empty list", () => {
  expect(employeesById([])).toEqual({});
});

test("all employees", () => {
  expect(employeesById(EMPLOYEES)).toEqual({"1":"Radia","2":"Linus","3":"Tim","4":"Dennis","5":"Ken","6":"Ada","7":"Alan","8":"Frances"});
});
