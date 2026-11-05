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

app.get('/hotels', (req, res) => {
  const { sort, order = 'asc' } = req.query;
  if (sort === undefined) return res.json(hotels.map((x) => x.name));
  if (!['name', 'nightlyPrice'].includes(sort)) return res.status(400).json({ error: `Cannot sort by ${sort}` });
  const dir = order === 'desc' ? -1 : 1;
  const sorted = [...hotels].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));
  res.json(sorted.map((x) => x.name));
});
