const app = express();
app.use(express.json());

const plants = [
  {id: 1, name: "Cactus", waterEveryDays: 11, heightCm: 11, light: "low", petSafe: false},
  {id: 2, name: "Fern", waterEveryDays: 3, heightCm: 112, light: "medium", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 8, heightCm: 5, light: "medium", petSafe: true},
  {id: 4, name: "Peace Lily", waterEveryDays: 5, heightCm: 69, light: "low", petSafe: false},
  {id: 5, name: "Monstera", waterEveryDays: 18, heightCm: 54, light: "medium", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 10, heightCm: 116, light: "low", petSafe: true},
  {id: 7, name: "Basil", waterEveryDays: 12, heightCm: 63, light: "bright", petSafe: false},
  {id: 8, name: "Aloe", waterEveryDays: 19, heightCm: 11, light: "low", petSafe: false}
];

app.delete('/plants/:id', (req, res) => {
  const index = plants.findIndex((x) => x.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  plants.splice(index, 1);
  res.status(204).end();
});
