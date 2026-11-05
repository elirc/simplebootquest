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

function requireKey(req, res, next) {
  if (req.get('x-api-key') !== 'letmein') return res.status(401).json({ error: 'Missing or invalid API key' });
  next();
}
app.get('/flights', (req, res) => res.json(flights));
app.post('/flights', requireKey, (req, res) => {
  const item = { id: flights.length + 1, number: req.body.number };
  flights.push(item);
  res.status(201).json(item);
});
