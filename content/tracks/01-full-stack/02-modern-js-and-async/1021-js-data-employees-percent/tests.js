const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 93374, yearsAtCompany: 13, team: "data", level: "senior", remote: true},
  {id: 2, name: "Radia", salary: 75445, yearsAtCompany: 3, team: "platform", level: "senior", remote: true},
  {id: 3, name: "Katherine", salary: 90090, yearsAtCompany: 9, team: "platform", level: "senior", remote: false},
  {id: 4, name: "Barbara", salary: 144911, yearsAtCompany: 4, team: "platform", level: "mid", remote: true},
  {id: 5, name: "Ada", salary: 106268, yearsAtCompany: 9, team: "product", level: "senior", remote: true},
  {id: 6, name: "Ken", salary: 105565, yearsAtCompany: 11, team: "data", level: "junior", remote: false},
  {id: 7, name: "Alan", salary: 122473, yearsAtCompany: 1, team: "platform", level: "senior", remote: true},
  {id: 8, name: "Frances", salary: 111213, yearsAtCompany: 7, team: "data", level: "mid", remote: true}
];

test("an empty list", () => {
  expect(percentRemote([])).toEqual(0);
});

test("all employees", () => {
  expect(percentRemote(EMPLOYEES)).toEqual(75);
});
