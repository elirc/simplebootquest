const app = express();
app.use(express.json());

const orders = [
  {id: 1, code: "E-500", totalCents: 14355, items: 5, status: "paid", country: "UK"},
  {id: 2, code: "C-300", totalCents: 16714, items: 8, status: "pending", country: "DE"},
  {id: 3, code: "A-100", totalCents: 10966, items: 1, status: "paid", country: "DE"},
  {id: 4, code: "C-301", totalCents: 16580, items: 3, status: "pending", country: "DE"},
  {id: 5, code: "B-201", totalCents: 21163, items: 2, status: "shipped", country: "US"},
  {id: 6, code: "B-200", totalCents: 22346, items: 4, status: "shipped", country: "UK"},
  {id: 7, code: "A-101", totalCents: 12737, items: 9, status: "pending", country: "UK"},
  {id: 8, code: "E-501", totalCents: 2591, items: 8, status: "cancelled", country: "DE"}
];

app.get('/orders/search', (req, res) => {
  const q = String(req.query.q ?? '').trim().toLowerCase();
  if (!q) return res.status(400).json({ error: 'q is required' });
  res.json(orders.filter((x) => x.code.toLowerCase().includes(q)).map((x) => x.code));
});
