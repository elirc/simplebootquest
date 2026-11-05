const app = express();
app.use(express.json());

const songs = [
  {id: 1, title: "Velvet", seconds: 195, plays: 1570, artist: "The Pines", mood: "dark"},
  {id: 2, title: "Drift", seconds: 135, plays: 4929, artist: "Kairo", mood: "dark"},
  {id: 3, title: "Echoes", seconds: 180, plays: 8849, artist: "Nova", mood: "dark"},
  {id: 4, title: "Gravity", seconds: 169, plays: 7021, artist: "The Pines", mood: "happy"},
  {id: 5, title: "Lanterns", seconds: 260, plays: 91, artist: "Nova", mood: "calm"},
  {id: 6, title: "Sunrise", seconds: 271, plays: 7856, artist: "The Pines", mood: "dark"},
  {id: 7, title: "Riverside", seconds: 387, plays: 7421, artist: "Nova", mood: "calm"},
  {id: 8, title: "Paper Planes", seconds: 328, plays: 1055, artist: "Kairo", mood: "happy"}
];

app.get('/songs', (req, res) => {
  const { sort, order = 'asc' } = req.query;
  if (sort === undefined) return res.json(songs.map((x) => x.title));
  if (!['title', 'seconds'].includes(sort)) return res.status(400).json({ error: `Cannot sort by ${sort}` });
  const dir = order === 'desc' ? -1 : 1;
  const sorted = [...songs].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));
  res.json(sorted.map((x) => x.title));
});
