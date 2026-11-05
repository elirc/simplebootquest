const app = express();
app.use(express.json());

const employees = [
  {id: 1, name: "Tim", salary: 59833, yearsAtCompany: 2, team: "data", level: "senior", remote: false},
  {id: 2, name: "Margaret", salary: 117030, yearsAtCompany: 7, team: "product", level: "mid", remote: true},
  {id: 3, name: "Katherine", salary: 146421, yearsAtCompany: 13, team: "data", level: "mid", remote: true},
  {id: 4, name: "Frances", salary: 131232, yearsAtCompany: 8, team: "data", level: "senior", remote: false},
  {id: 5, name: "Ken", salary: 130831, yearsAtCompany: 12, team: "platform", level: "senior", remote: false},
  {id: 6, name: "Dennis", salary: 112186, yearsAtCompany: 14, team: "platform", level: "mid", remote: false},
  {id: 7, name: "Alan", salary: 114713, yearsAtCompany: 6, team: "data", level: "junior", remote: false},
  {id: 8, name: "Grace", salary: 66482, yearsAtCompany: 6, team: "product", level: "senior", remote: false}
];

app.post('/employees', (req, res) => {
  const { name, salary } = req.body ?? {};
  if (typeof name !== 'string' || !name.trim() || typeof salary !== 'number' || salary < 0) {
    return res.status(400).json({ error: 'Invalid employee' });
  }
  const id = Math.max(0, ...employees.map((x) => x.id)) + 1;
  const item = { id, name, salary };
  employees.push(item);
  res.status(201).location(`/employees/${id}`).json(item);
});
