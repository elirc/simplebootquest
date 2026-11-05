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

app.get('/employees/:id', (req, res) => {
  if (req.params.id === '0') throw new Error('database exploded');
  const item = employees.find((x) => x.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, next) => res.status(500).json({ error: 'Internal server error' }));
