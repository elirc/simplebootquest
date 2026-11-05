const BEFORE = [
  {id: 1, name: "Barbara", salary: 94732, yearsAtCompany: 9, team: "data", level: "senior", remote: false},
  {id: 2, name: "Dennis", salary: 138322, yearsAtCompany: 8, team: "data", level: "senior", remote: true},
  {id: 3, name: "Margaret", salary: 113907, yearsAtCompany: 13, team: "data", level: "mid", remote: false},
  {id: 4, name: "Frances", salary: 94310, yearsAtCompany: 6, team: "product", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 154410, yearsAtCompany: 6, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Alan", salary: 149861, yearsAtCompany: 12, team: "platform", level: "mid", remote: false},
  {id: 7, name: "Ada", salary: 53120, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 129855, yearsAtCompany: 9, team: "product", level: "mid", remote: false}
];
const AFTER = [
  {id: 1, name: "Barbara", salary: 94732, yearsAtCompany: 9, team: "data", level: "senior", remote: false},
  {id: 2, name: "Dennis", salary: 138329, yearsAtCompany: 8, team: "data", level: "senior", remote: true},
  {id: 3, name: "Margaret", salary: 113907, yearsAtCompany: 13, team: "data", level: "mid", remote: false},
  {id: 4, name: "Frances", salary: 94310, yearsAtCompany: 6, team: "product", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 154417, yearsAtCompany: 6, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Alan", salary: 149861, yearsAtCompany: 12, team: "platform", level: "mid", remote: false},
  {id: 7, name: "Ada", salary: 53120, yearsAtCompany: 9, team: "data", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 129862, yearsAtCompany: 9, team: "product", level: "mid", remote: false}
];

test("finds changed ids", () => {
  expect(salaryChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(salaryChanges(BEFORE, BEFORE)).toEqual([]);
});
