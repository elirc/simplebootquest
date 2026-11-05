const app = express();
app.use(express.json());

const hotels = [
  {id: 1, name: "Riverside Inn", nightlyPrice: 338, stars: 4, city: "Kyoto", breakfast: false},
  {id: 2, name: "Old Mill", nightlyPrice: 77, stars: 3, city: "Kyoto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 79, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Station Hotel", nightlyPrice: 139, stars: 2, city: "Toronto", breakfast: false},
  {id: 5, name: "Harbour View", nightlyPrice: 413, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Sky Garden", nightlyPrice: 141, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Sea Breeze", nightlyPrice: 137, stars: 1, city: "Lisbon", breakfast: false},
  {id: 8, name: "Northern Star", nightlyPrice: 48, stars: 3, city: "Kyoto", breakfast: true}
];

app.delete('/hotels/:id', (req, res) => {
  const item = hotels.find((x) => x.id === Number(req.params.id) && !x.deletedAt);
  if (!item) return res.status(404).json({ error: 'Not found' });
  item.deletedAt = '2026-01-01';
  res.status(204).end();
});
app.get('/hotels', (req, res) => res.json(hotels.filter((x) => !x.deletedAt).map((x) => x.name)));
