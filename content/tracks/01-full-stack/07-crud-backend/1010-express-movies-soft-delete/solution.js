const app = express();
app.use(express.json());

const movies = [
  {id: 1, title: "Glass City", year: 2013, minutes: 112, rating: 6.5, genre: "thriller"},
  {id: 2, title: "Paper Moon", year: 2016, minutes: 107, rating: 4.8, genre: "drama"},
  {id: 3, title: "Cloud Atlas", year: 2017, minutes: 151, rating: 4.2, genre: "thriller"},
  {id: 4, title: "Iron Garden", year: 2015, minutes: 106, rating: 8.2, genre: "comedy"},
  {id: 5, title: "Silver Fox", year: 2017, minutes: 171, rating: 7.5, genre: "thriller"},
  {id: 6, title: "Open Road", year: 2016, minutes: 106, rating: 7, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 2006, minutes: 141, rating: 4, genre: "drama"},
  {id: 8, title: "Quiet Storm", year: 2015, minutes: 97, rating: 4.4, genre: "thriller"}
];

app.delete('/movies/:id', (req, res) => {
  const item = movies.find((x) => x.id === Number(req.params.id) && !x.deletedAt);
  if (!item) return res.status(404).json({ error: 'Not found' });
  item.deletedAt = '2026-01-01';
  res.status(204).end();
});
app.get('/movies', (req, res) => res.json(movies.filter((x) => !x.deletedAt).map((x) => x.title)));
