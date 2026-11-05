// mutant: sort direction reversed
const EMPLOYEES = [
  {id: 1, name: "Linus", salary: 133162, yearsAtCompany: 0, team: "platform", level: "junior", remote: false},
  {id: 2, name: "Alan", salary: 87944, yearsAtCompany: 8, team: "data", level: "junior", remote: true},
  {id: 3, name: "Katherine", salary: 141372, yearsAtCompany: 5, team: "data", level: "senior", remote: true},
  {id: 4, name: "Tim", salary: 121191, yearsAtCompany: 12, team: "product", level: "senior", remote: false},
  {id: 5, name: "Radia", salary: 157320, yearsAtCompany: 15, team: "data", level: "mid", remote: true},
  {id: 6, name: "Margaret", salary: 112145, yearsAtCompany: 3, team: "platform", level: "senior", remote: true},
  {id: 7, name: "Ken", salary: 139522, yearsAtCompany: 9, team: "product", level: "mid", remote: true},
  {id: 8, name: "Frances", salary: 151210, yearsAtCompany: 7, team: "product", level: "mid", remote: true}
];

function employeesByYearsAtCompany(employees) {
  return [...employees].sort((a, b) => b.yearsAtCompany - a.yearsAtCompany).map((x) => x.name);
}
