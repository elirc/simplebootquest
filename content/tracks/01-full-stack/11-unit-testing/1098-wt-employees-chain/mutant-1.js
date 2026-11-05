// mutant: condition negated: `===` became `!==`
const EMPLOYEES = [
  {id: 1, name: "Ken", salary: 151414, yearsAtCompany: 15, team: "platform", level: "senior", remote: true},
  {id: 2, name: "Tim", salary: 117686, yearsAtCompany: 6, team: "product", level: "senior", remote: false},
  {id: 3, name: "Katherine", salary: 102953, yearsAtCompany: 9, team: "product", level: "junior", remote: true},
  {id: 4, name: "Dennis", salary: 63747, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 5, name: "Radia", salary: 77590, yearsAtCompany: 3, team: "product", level: "senior", remote: true},
  {id: 6, name: "Alan", salary: 143468, yearsAtCompany: 0, team: "product", level: "junior", remote: false},
  {id: 7, name: "Barbara", salary: 148833, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 63912, yearsAtCompany: 10, team: "platform", level: "senior", remote: false}
];

function employeesInTeamRanked(employees, value) {
  return employees
    .filter((x) => x.team !== value)
    .sort((a, b) => b.salary - a.salary)
    .map((x) => x.name);
}
