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

app.post('/songs', (req, res) => {
  const { title, seconds } = req.body ?? {};
  if (typeof title !== 'string' || !title.trim() || typeof seconds !== 'number' || seconds < 0) {
    return res.status(400).json({ error: 'Invalid song' });
  }
  const id = Math.max(0, ...songs.map((x) => x.id)) + 1;
  const item = { id, title, seconds };
  songs.push(item);
  res.status(201).location(`/songs/${id}`).json(item);
});
