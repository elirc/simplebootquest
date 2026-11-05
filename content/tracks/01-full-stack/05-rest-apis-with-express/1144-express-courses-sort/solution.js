const app = express();
app.use(express.json());

const courses = [
  {id: 1, title: "Web Security", lessons: 32, enrolled: 4215, level: "intermediate"},
  {id: 2, title: "React Basics", lessons: 31, enrolled: 2912, level: "beginner"},
  {id: 3, title: "Docker Intro", lessons: 29, enrolled: 3024, level: "intermediate"},
  {id: 4, title: "Data Viz", lessons: 38, enrolled: 741, level: "intermediate"},
  {id: 5, title: "CSS Layouts", lessons: 19, enrolled: 1026, level: "intermediate"},
  {id: 6, title: "Node APIs", lessons: 20, enrolled: 4192, level: "beginner"},
  {id: 7, title: "Intro to SQL", lessons: 34, enrolled: 1712, level: "beginner"},
  {id: 8, title: "GraphQL", lessons: 32, enrolled: 2068, level: "advanced"}
];

app.get('/courses', (req, res) => {
  const { sort, order = 'asc' } = req.query;
  if (sort === undefined) return res.json(courses.map((x) => x.title));
  if (!['title', 'lessons'].includes(sort)) return res.status(400).json({ error: `Cannot sort by ${sort}` });
  const dir = order === 'desc' ? -1 : 1;
  const sorted = [...courses].sort((a, b) => (a[sort] < b[sort] ? -dir : a[sort] > b[sort] ? dir : 0));
  res.json(sorted.map((x) => x.title));
});
