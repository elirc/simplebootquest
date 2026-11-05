const EMPLOYEES = [
  {id: 1, name: "Tim", salary: 105237, yearsAtCompany: 10, team: "data", level: "mid", remote: false},
  {id: 2, name: "Dennis", salary: 116139, yearsAtCompany: 4, team: "platform", level: "mid", remote: true},
  {id: 3, name: "Frances", salary: 71288, yearsAtCompany: 8, team: "product", level: "mid", remote: false},
  {id: 4, name: "Grace", salary: 108410, yearsAtCompany: 13, team: "product", level: "mid", remote: false},
  {id: 5, name: "Barbara", salary: 146062, yearsAtCompany: 11, team: "platform", level: "junior", remote: false},
  {id: 6, name: "Alan", salary: 51572, yearsAtCompany: 9, team: "data", level: "senior", remote: false},
  {id: 7, name: "Linus", salary: 156942, yearsAtCompany: 4, team: "data", level: "junior", remote: true},
  {id: 8, name: "Radia", salary: 47377, yearsAtCompany: 15, team: "platform", level: "junior", remote: false}
];

test("an empty list", () => {
  expect(distinctLevels([])).toEqual([]);
});

test("all employees", () => {
  expect(distinctLevels(EMPLOYEES)).toEqual(["junior","mid","senior"]);
});
