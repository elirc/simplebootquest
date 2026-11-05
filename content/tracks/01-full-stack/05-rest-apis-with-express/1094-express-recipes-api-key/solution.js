const app = express();
app.use(express.json());

const recipes = [
  {id: 1, name: "Shakshuka", minutes: 52, calories: 545, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Pancakes", minutes: 39, calories: 529, cuisine: "asian", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Curry", minutes: 112, calories: 800, cuisine: "italian", difficulty: "medium", vegetarian: false},
  {id: 4, name: "Risotto", minutes: 34, calories: 430, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 5, name: "Chili", minutes: 110, calories: 940, cuisine: "mexican", difficulty: "easy", vegetarian: true},
  {id: 6, name: "Ramen", minutes: 75, calories: 460, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 7, name: "Paella", minutes: 66, calories: 784, cuisine: "middle-eastern", difficulty: "hard", vegetarian: false},
  {id: 8, name: "Tacos", minutes: 80, calories: 610, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

function requireKey(req, res, next) {
  if (req.get('x-api-key') !== 'letmein') return res.status(401).json({ error: 'Missing or invalid API key' });
  next();
}
app.get('/recipes', (req, res) => res.json(recipes));
app.post('/recipes', requireKey, (req, res) => {
  const item = { id: recipes.length + 1, name: req.body.name };
  recipes.push(item);
  res.status(201).json(item);
});
