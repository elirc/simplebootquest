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

app.delete('/students/:id', (req, res) => {
  const index = students.findIndex((x) => x.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  students.splice(index, 1);
  res.status(204).end();
});
