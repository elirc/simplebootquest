const app = express();
app.use(express.json());

const students = [
  {id: 1, name: "Amara", score: 86, age: 29, course: "web", graduated: false},
  {id: 2, name: "Keiko", score: 76, age: 33, course: "web", graduated: true},
  {id: 3, name: "Jonah", score: 89, age: 32, course: "web", graduated: false},
  {id: 4, name: "Bilal", score: 45, age: 31, course: "web", graduated: false},
  {id: 5, name: "Chen", score: 60, age: 29, course: "data", graduated: false},
  {id: 6, name: "Elif", score: 43, age: 28, course: "web", graduated: false},
  {id: 7, name: "Dara", score: 90, age: 32, course: "web", graduated: true},
  {id: 8, name: "Luca", score: 85, age: 22, course: "web", graduated: false}
];

app.post('/students', (req, res) => {
  const { name, score } = req.body ?? {};
  if (typeof name !== 'string' || !name.trim() || typeof score !== 'number' || score < 0) {
    return res.status(400).json({ error: 'Invalid student' });
  }
  const id = Math.max(0, ...students.map((x) => x.id)) + 1;
  const item = { id, name, score };
  students.push(item);
  res.status(201).location(`/students/${id}`).json(item);
});
