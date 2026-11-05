const EMPLOYEES = [
  {id: 1, name: "Margaret", salary: 142313, yearsAtCompany: 11, team: "data", level: "senior", remote: false},
  {id: 2, name: "Tim", salary: 90356, yearsAtCompany: 5, team: "product", level: "mid", remote: true},
  {id: 3, name: "Radia", salary: 125549, yearsAtCompany: 8, team: "data", level: "mid", remote: false},
  {id: 4, name: "Ada", salary: 138289, yearsAtCompany: 12, team: "data", level: "junior", remote: false},
  {id: 5, name: "Ken", salary: 150364, yearsAtCompany: 8, team: "platform", level: "senior", remote: false},
  {id: 6, name: "Katherine", salary: 68390, yearsAtCompany: 13, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Dennis", salary: 69295, yearsAtCompany: 2, team: "data", level: "senior", remote: false},
  {id: 8, name: "Alan", salary: 124135, yearsAtCompany: 10, team: "product", level: "mid", remote: false}
];

test("an empty list", () => {
  expect(describeEmployees([])).toEqual([]);
});

test("all employees", () => {
  expect(describeEmployees(EMPLOYEES)).toEqual(["Margaret (142313)","Tim (90356)","Radia (125549)","Ada (138289)","Ken (150364)","Katherine (68390)","Dennis (69295)","Alan (124135)"]);
});
