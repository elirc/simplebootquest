const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 126655, yearsAtCompany: 2, team: "platform", level: "mid", remote: false},
  {id: 2, name: "Frances", salary: 135301, yearsAtCompany: 8, team: "platform", level: "junior", remote: true},
  {id: 3, name: "Linus", salary: 118814, yearsAtCompany: 4, team: "product", level: "mid", remote: true},
  {id: 4, name: "Grace", salary: 89953, yearsAtCompany: 11, team: "data", level: "senior", remote: false},
  {id: 5, name: "Radia", salary: 122110, yearsAtCompany: 14, team: "data", level: "senior", remote: true},
  {id: 6, name: "Tim", salary: 110228, yearsAtCompany: 7, team: "platform", level: "junior", remote: true},
  {id: 7, name: "Ada", salary: 89691, yearsAtCompany: 15, team: "product", level: "mid", remote: false},
  {id: 8, name: "Ken", salary: 80501, yearsAtCompany: 1, team: "data", level: "mid", remote: false}
];

function bumpYearsAtCompany(employees, value, amount) {
  return employees.map((x) => (x.team === value ? { ...x, yearsAtCompany: x.yearsAtCompany + amount } : x));
}
