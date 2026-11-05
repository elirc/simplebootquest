// mutant: pages start at the wrong offset
const EMPLOYEES = [
  {id: 1, name: "Grace", salary: 81163, yearsAtCompany: 13, team: "platform", level: "junior", remote: true},
  {id: 2, name: "Frances", salary: 51990, yearsAtCompany: 2, team: "data", level: "mid", remote: false},
  {id: 3, name: "Ada", salary: 66031, yearsAtCompany: 3, team: "platform", level: "senior", remote: true},
  {id: 4, name: "Dennis", salary: 150675, yearsAtCompany: 13, team: "product", level: "junior", remote: true},
  {id: 5, name: "Linus", salary: 157240, yearsAtCompany: 8, team: "product", level: "mid", remote: true},
  {id: 6, name: "Alan", salary: 158334, yearsAtCompany: 3, team: "product", level: "junior", remote: true},
  {id: 7, name: "Margaret", salary: 77135, yearsAtCompany: 10, team: "product", level: "senior", remote: true},
  {id: 8, name: "Tim", salary: 100484, yearsAtCompany: 10, team: "data", level: "mid", remote: true}
];

function pageOfEmployees(employees, page, size) {
  const totalPages = Math.ceil(employees.length / size);
  const items = employees.slice(page * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
