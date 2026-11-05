const app = express();
app.use(express.json());

const flights = [
  {id: 1, number: "KL641", durationMin: 600, delayMin: 64, seats: 23, airline: "star"},
  {id: 2, number: "TK1", durationMin: 607, delayMin: 173, seats: 16, airline: "oneworld"},
  {id: 3, number: "EK3", durationMin: 778, delayMin: 123, seats: 45, airline: "oneworld"},
  {id: 4, number: "QF1", durationMin: 384, delayMin: 32, seats: 33, airline: "skyteam"},
  {id: 5, number: "UA90", durationMin: 168, delayMin: 135, seats: 20, airline: "star"},
  {id: 6, number: "LH400", durationMin: 650, delayMin: 173, seats: 1, airline: "skyteam"},
  {id: 7, number: "BA117", durationMin: 331, delayMin: 139, seats: 34, airline: "oneworld"},
  {id: 8, number: "DL15", durationMin: 621, delayMin: 117, seats: 46, airline: "skyteam"}
];

app.get('/flights', (req, res) => {
  const { sort, order = 'asc' } = req.query;
  if (sort === undefined) return res.json(flights.map((x) => x.number));
  if (!['number', 'durationMin'].includes(sort)) return res.status(400).json({ error: `Cannot sort by ${sort}` });
  const dir = order === 'desc' ? -1 : 1;
  const sorted = [...flights].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));
  res.json(sorted.map((x) => x.number));
});
