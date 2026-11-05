const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 126808, yearsAtCompany: 14, team: "platform", level: "junior", remote: false},
  {id: 2, name: "Ada", salary: 143517, yearsAtCompany: 15, team: "platform", level: "senior", remote: false},
  {id: 3, name: "Grace", salary: 145631, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 4, name: "Margaret", salary: 43230, yearsAtCompany: 6, team: "platform", level: "mid", remote: true},
  {id: 5, name: "Linus", salary: 43090, yearsAtCompany: 6, team: "platform", level: "junior", remote: true},
  {id: 6, name: "Radia", salary: 107211, yearsAtCompany: 0, team: "platform", level: "mid", remote: true},
  {id: 7, name: "Frances", salary: 54287, yearsAtCompany: 10, team: "data", level: "mid", remote: false},
  {id: 8, name: "Dennis", salary: 140233, yearsAtCompany: 12, team: "platform", level: "mid", remote: false}
];

test("an empty list", () => {
  expect(percentRemote([])).toEqual(0);
});

test("all employees", () => {
  expect(percentRemote(EMPLOYEES)).toEqual(38);
});
