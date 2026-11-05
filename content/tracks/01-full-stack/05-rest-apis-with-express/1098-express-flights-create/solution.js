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

app.post('/flights', (req, res) => {
  const { number, durationMin } = req.body ?? {};
  if (typeof number !== 'string' || !number.trim() || typeof durationMin !== 'number' || durationMin < 0) {
    return res.status(400).json({ error: 'Invalid flight' });
  }
  const id = Math.max(0, ...flights.map((x) => x.id)) + 1;
  const item = { id, number, durationMin };
  flights.push(item);
  res.status(201).location(`/flights/${id}`).json(item);
});
