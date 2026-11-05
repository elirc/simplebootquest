const app = express();
app.use(express.json());

const products = [
  {id: 1, name: "Backpack", price: 51, stock: 54, category: "office", onSale: true},
  {id: 2, name: "Desk Lamp", price: 117, stock: 56, category: "office", onSale: false},
  {id: 3, name: "Coffee Mug", price: 74, stock: 3, category: "home", onSale: true},
  {id: 4, name: "Monitor Arm", price: 89, stock: 33, category: "tech", onSale: false},
  {id: 5, name: "Webcam", price: 87, stock: 23, category: "office", onSale: true},
  {id: 6, name: "Mouse Pad", price: 23, stock: 0, category: "home", onSale: true},
  {id: 7, name: "USB Hub", price: 64, stock: 47, category: "home", onSale: true},
  {id: 8, name: "Water Bottle", price: 53, stock: 10, category: "office", onSale: false}
];

app.get('/products/:id', (req, res) => {
  if (req.params.id === '0') throw new Error('database exploded');
  const item = products.find((x) => x.id === Number(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});
app.use((req, res) => res.status(404).json({ error: 'Route not found' }));
app.use((err, req, res, next) => res.status(500).json({ error: 'Internal server error' }));
