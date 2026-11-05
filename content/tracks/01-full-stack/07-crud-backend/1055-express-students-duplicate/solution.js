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
  const name = String(req.body?.name ?? '');
  if (students.some((x) => x.name.toLowerCase() === name.toLowerCase())) {
    return res.status(409).json({ error: 'Student already exists' });
  }
  const item = { id: students.length + 1, name };
  students.push(item);
  res.status(201).json(item);
});
