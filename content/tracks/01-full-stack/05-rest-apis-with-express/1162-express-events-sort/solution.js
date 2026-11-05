const app = express();
app.use(express.json());

const events = [
  {id: 1, name: "AI Panel", capacity: 186, registered: 190, format: "in-person", free: false},
  {id: 2, name: "Demo Day", capacity: 295, registered: 225, format: "in-person", free: true},
  {id: 3, name: "Workshop", capacity: 156, registered: 26, format: "online", free: false},
  {id: 4, name: "Code Dojo", capacity: 317, registered: 134, format: "in-person", free: false},
  {id: 5, name: "Hackathon", capacity: 86, registered: 112, format: "online", free: true},
  {id: 6, name: "Book Club", capacity: 330, registered: 212, format: "in-person", free: true},
  {id: 7, name: "Design Jam", capacity: 150, registered: 272, format: "in-person", free: true},
  {id: 8, name: "Startup Night", capacity: 23, registered: 165, format: "in-person", free: false}
];

app.get('/events', (req, res) => {
  const { sort, order = 'asc' } = req.query;
  if (sort === undefined) return res.json(events.map((x) => x.name));
  if (!['name', 'capacity'].includes(sort)) return res.status(400).json({ error: `Cannot sort by ${sort}` });
  const dir = order === 'desc' ? -1 : 1;
  const sorted = [...events].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));
  res.json(sorted.map((x) => x.name));
});
