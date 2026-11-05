// mutant: sort direction reversed
const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 87327, yearsAtCompany: 4, team: "platform", level: "senior", remote: true},
  {id: 2, name: "Alan", salary: 125281, yearsAtCompany: 13, team: "platform", level: "mid", remote: true},
  {id: 3, name: "Linus", salary: 59969, yearsAtCompany: 0, team: "platform", level: "junior", remote: false},
  {id: 4, name: "Frances", salary: 91469, yearsAtCompany: 1, team: "platform", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 127273, yearsAtCompany: 1, team: "data", level: "junior", remote: true},
  {id: 6, name: "Ada", salary: 88081, yearsAtCompany: 13, team: "platform", level: "mid", remote: true},
  {id: 7, name: "Margaret", salary: 78739, yearsAtCompany: 6, team: "platform", level: "mid", remote: true},
  {id: 8, name: "Dennis", salary: 141219, yearsAtCompany: 3, team: "product", level: "senior", remote: false}
];

function nthByYearsAtCompany(employees, n) {
  const sorted = [...employees].sort((a, b) => a.yearsAtCompany - b.yearsAtCompany);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
