const EMPLOYEES = [
  {id: 1, name: "Grace", salary: 100583, yearsAtCompany: 8, team: "product", level: "junior", remote: false},
  {id: 2, name: "Barbara", salary: 58015, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 3, name: "Tim", salary: 107191, yearsAtCompany: 10, team: "platform", level: "mid", remote: false},
  {id: 4, name: "Katherine", salary: 114072, yearsAtCompany: 12, team: "platform", level: "mid", remote: true},
  {id: 5, name: "Ada", salary: 159808, yearsAtCompany: 9, team: "data", level: "mid", remote: false},
  {id: 6, name: "Radia", salary: 141000, yearsAtCompany: 2, team: "data", level: "junior", remote: true},
  {id: 7, name: "Linus", salary: 122540, yearsAtCompany: 5, team: "product", level: "junior", remote: false},
  {id: 8, name: "Alan", salary: 44936, yearsAtCompany: 9, team: "platform", level: "senior", remote: true}
];

function percentRemote(employees) {
  if (employees.length === 0) return 0;
  return Math.round((employees.filter((x) => x.remote).length / employees.length) * 100);
}
