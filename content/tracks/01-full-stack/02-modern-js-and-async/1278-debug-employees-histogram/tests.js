const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 152841, yearsAtCompany: 7, team: "product", level: "junior", remote: true},
  {id: 2, name: "Dennis", salary: 100468, yearsAtCompany: 5, team: "data", level: "senior", remote: false},
  {id: 3, name: "Grace", salary: 50529, yearsAtCompany: 4, team: "data", level: "mid", remote: true},
  {id: 4, name: "Radia", salary: 79726, yearsAtCompany: 3, team: "platform", level: "mid", remote: true},
  {id: 5, name: "Barbara", salary: 158832, yearsAtCompany: 1, team: "product", level: "mid", remote: false},
  {id: 6, name: "Katherine", salary: 66695, yearsAtCompany: 10, team: "platform", level: "junior", remote: true},
  {id: 7, name: "Margaret", salary: 50640, yearsAtCompany: 12, team: "product", level: "mid", remote: true},
  {id: 8, name: "Ada", salary: 155657, yearsAtCompany: 9, team: "product", level: "mid", remote: true}
];

test("with 5", () => {
  expect(yearsAtCompanyHistogram(EMPLOYEES, 5)).toEqual({"0":3,"5":3,"10":2});
});

test("with 10", () => {
  expect(yearsAtCompanyHistogram(EMPLOYEES, 10)).toEqual({"0":6,"10":2});
});
