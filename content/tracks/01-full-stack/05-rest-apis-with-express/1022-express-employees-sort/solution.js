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

app.get('/employees', (req, res) => {
  const { sort, order = 'asc' } = req.query;
  if (sort === undefined) return res.json(employees.map((x) => x.name));
  if (!['name', 'salary'].includes(sort)) return res.status(400).json({ error: `Cannot sort by ${sort}` });
  const dir = order === 'desc' ? -1 : 1;
  const sorted = [...employees].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));
  res.json(sorted.map((x) => x.name));
});
