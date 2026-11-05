const EMPLOYEES = [
  {id: 1, name: "Alan", salary: 149013, yearsAtCompany: 4, team: "data", level: "mid", remote: false},
  {id: 2, name: "Frances", salary: 133832, yearsAtCompany: 6, team: "platform", level: "mid", remote: false},
  {id: 3, name: "Margaret", salary: 124075, yearsAtCompany: 9, team: "platform", level: "mid", remote: true},
  {id: 4, name: "Dennis", salary: 90422, yearsAtCompany: 14, team: "product", level: "junior", remote: true},
  {id: 5, name: "Katherine", salary: 151588, yearsAtCompany: 1, team: "platform", level: "senior", remote: false},
  {id: 6, name: "Linus", salary: 49466, yearsAtCompany: 5, team: "platform", level: "senior", remote: false},
  {id: 7, name: "Ken", salary: 115860, yearsAtCompany: 3, team: "product", level: "mid", remote: true},
  {id: 8, name: "Tim", salary: 139286, yearsAtCompany: 14, team: "platform", level: "mid", remote: false}
];

function averageYearsAtCompany(employees) {
  if (employees.length === 0) return null;
  const total = employees.reduce((sum, x) => sum + x.yearsAtCompany, 0);
  return Math.round((total / employees.length) * 10) / 10;
}
