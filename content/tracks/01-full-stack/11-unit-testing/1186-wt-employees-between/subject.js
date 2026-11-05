const EMPLOYEES = [
  {id: 1, name: "Ada", salary: 108153, yearsAtCompany: 10, team: "product", level: "junior", remote: false},
  {id: 2, name: "Barbara", salary: 138562, yearsAtCompany: 14, team: "product", level: "mid", remote: false},
  {id: 3, name: "Tim", salary: 47807, yearsAtCompany: 3, team: "product", level: "mid", remote: true},
  {id: 4, name: "Alan", salary: 121650, yearsAtCompany: 13, team: "platform", level: "senior", remote: false},
  {id: 5, name: "Ken", salary: 157122, yearsAtCompany: 10, team: "product", level: "mid", remote: true},
  {id: 6, name: "Dennis", salary: 137632, yearsAtCompany: 5, team: "platform", level: "senior", remote: false},
  {id: 7, name: "Katherine", salary: 91854, yearsAtCompany: 13, team: "product", level: "senior", remote: false},
  {id: 8, name: "Margaret", salary: 82831, yearsAtCompany: 4, team: "platform", level: "senior", remote: false}
];

function employeesInRange(employees, low, high) {
  return employees.filter((x) => x.yearsAtCompany >= low && x.yearsAtCompany <= high).map((x) => x.name);
}
