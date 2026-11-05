const app = express();
app.use(express.json());

const cars = [
  {id: 1, model: "Polo", priceK: 38, km: 170530, year: 2018, fuel: "petrol"},
  {id: 2, model: "Mazda3", priceK: 42, km: 21941, year: 2011, fuel: "hybrid"},
  {id: 3, model: "Model 3", priceK: 39, km: 89121, year: 2016, fuel: "hybrid"},
  {id: 4, model: "Golf", priceK: 31, km: 170064, year: 2019, fuel: "petrol"},
  {id: 5, model: "Leaf", priceK: 51, km: 54530, year: 2011, fuel: "diesel"},
  {id: 6, model: "Mustang", priceK: 31, km: 33744, year: 2009, fuel: "electric"},
  {id: 7, model: "Civic", priceK: 19, km: 76746, year: 2008, fuel: "petrol"},
  {id: 8, model: "Fiesta", priceK: 49, km: 153746, year: 2022, fuel: "electric"}
];

app.get('/cars/:id', (req, res) => {
  if (req.params.id === '0') throw new Error('database exploded');
  const item = cars.find((x) => x.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, next) => res.status(500).json({ error: 'Internal server error' }));
