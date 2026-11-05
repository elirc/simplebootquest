// mutant: input is no longer trimmed
const EMPLOYEES = [
  {id: 1, name: "Barbara", salary: 156787, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 2, name: "Radia", salary: 154896, yearsAtCompany: 11, team: "platform", level: "junior", remote: false},
  {id: 3, name: "Frances", salary: 125063, yearsAtCompany: 13, team: "data", level: "senior", remote: false},
  {id: 4, name: "Linus", salary: 146180, yearsAtCompany: 9, team: "product", level: "junior", remote: true},
  {id: 5, name: "Katherine", salary: 120023, yearsAtCompany: 5, team: "platform", level: "senior", remote: true},
  {id: 6, name: "Dennis", salary: 102696, yearsAtCompany: 12, team: "product", level: "junior", remote: false},
  {id: 7, name: "Ada", salary: 54972, yearsAtCompany: 7, team: "product", level: "mid", remote: true},
  {id: 8, name: "Grace", salary: 57239, yearsAtCompany: 4, team: "product", level: "senior", remote: false}
];

function searchEmployees(employees, query) {
  const q = query.toLowerCase();
  return employees.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
