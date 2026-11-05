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

app.post('/products', (req, res) => {
  const { name, price } = req.body ?? {};
  if (typeof name !== 'string' || !name.trim() || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ error: 'Invalid product' });
  }
  const id = Math.max(0, ...products.map((x) => x.id)) + 1;
  const item = { id, name, price };
  products.push(item);
  res.status(201).location(`/products/${id}`).json(item);
});
