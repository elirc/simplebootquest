const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 76440, yearsAtCompany: 9, team: "product", level: "senior", remote: true},
  {id: 2, name: "Katherine", salary: 46757, yearsAtCompany: 3, team: "product", level: "junior", remote: true},
  {id: 3, name: "Dennis", salary: 75651, yearsAtCompany: 13, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Grace", salary: 51957, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 5, name: "Tim", salary: 72790, yearsAtCompany: 9, team: "product", level: "senior", remote: false},
  {id: 6, name: "Alan", salary: 136843, yearsAtCompany: 8, team: "product", level: "senior", remote: true},
  {id: 7, name: "Ken", salary: 67221, yearsAtCompany: 7, team: "data", level: "mid", remote: false},
  {id: 8, name: "Linus", salary: 74171, yearsAtCompany: 6, team: "data", level: "mid", remote: false}
];

test("with 29500", () => {
  expect(salaryHistogram(EMPLOYEES, 29500)).toEqual({"29500":2,"59000":5,"118000":1});
});

test("with 59000", () => {
  expect(salaryHistogram(EMPLOYEES, 59000)).toEqual({"0":2,"59000":5,"118000":1});
});
