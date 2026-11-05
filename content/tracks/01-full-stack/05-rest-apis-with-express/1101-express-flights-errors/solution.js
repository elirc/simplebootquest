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

app.get('/flights/:id', (req, res) => {
  if (req.params.id === '0') throw new Error('database exploded');
  const item = flights.find((x) => x.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, next) => res.status(500).json({ error: 'Internal server error' }));
