// mutant: sorts (mutates) the input array in place
const EMPLOYEES = [
  {id: 1, name: "Tim", salary: 74942, yearsAtCompany: 9, team: "data", level: "senior", remote: false},
  {id: 2, name: "Ken", salary: 44247, yearsAtCompany: 10, team: "data", level: "junior", remote: false},
  {id: 3, name: "Alan", salary: 53649, yearsAtCompany: 7, team: "product", level: "senior", remote: false},
  {id: 4, name: "Ada", salary: 124677, yearsAtCompany: 4, team: "product", level: "mid", remote: true},
  {id: 5, name: "Margaret", salary: 67910, yearsAtCompany: 14, team: "platform", level: "mid", remote: true},
  {id: 6, name: "Linus", salary: 64632, yearsAtCompany: 11, team: "data", level: "junior", remote: false},
  {id: 7, name: "Radia", salary: 120810, yearsAtCompany: 8, team: "data", level: "junior", remote: true},
  {id: 8, name: "Katherine", salary: 59930, yearsAtCompany: 11, team: "product", level: "senior", remote: true}
];

function topEmployeesByYearsAtCompany(employees, n) {
  return employees.sort((a, b) => b.yearsAtCompany - a.yearsAtCompany).slice(0, n).map((x) => x.name);
}
