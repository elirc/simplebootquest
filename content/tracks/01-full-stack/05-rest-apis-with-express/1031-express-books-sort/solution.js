const app = express();
app.use(express.json());

const books = [
  {id: 1, title: "Dune", pages: 150, year: 1995, genre: "classic", available: false},
  {id: 2, title: "Siddhartha", pages: 426, year: 1864, genre: "classic", available: true},
  {id: 3, title: "Clean Code", pages: 521, year: 1826, genre: "classic", available: false},
  {id: 4, title: "Kindred", pages: 414, year: 1869, genre: "tech", available: true},
  {id: 5, title: "Ulysses", pages: 771, year: 1817, genre: "classic", available: false},
  {id: 6, title: "Rebecca", pages: 753, year: 1826, genre: "tech", available: true},
  {id: 7, title: "Neuromancer", pages: 755, year: 1925, genre: "fiction", available: false},
  {id: 8, title: "Hamlet", pages: 227, year: 1970, genre: "fiction", available: false}
];

app.get('/books', (req, res) => {
  const { sort, order = 'asc' } = req.query;
  if (sort === undefined) return res.json(books.map((x) => x.title));
  if (!['title', 'pages'].includes(sort)) return res.status(400).json({ error: `Cannot sort by ${sort}` });
  const dir = order === 'desc' ? -1 : 1;
  const sorted = [...books].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));
  res.json(sorted.map((x) => x.title));
});
