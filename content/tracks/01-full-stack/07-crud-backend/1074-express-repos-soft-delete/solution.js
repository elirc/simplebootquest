const app = express();
app.use(express.json());

const repos = [
  {id: 1, name: "billing", stars: 1301, openIssues: 39, language: "TypeScript", archived: false},
  {id: 2, name: "docs", stars: 4401, openIssues: 100, language: "Go", archived: false},
  {id: 3, name: "infra", stars: 2307, openIssues: 109, language: "Python", archived: false},
  {id: 4, name: "web-app", stars: 3409, openIssues: 16, language: "TypeScript", archived: false},
  {id: 5, name: "api-gateway", stars: 939, openIssues: 20, language: "TypeScript", archived: true},
  {id: 6, name: "analytics", stars: 4195, openIssues: 1, language: "Go", archived: true},
  {id: 7, name: "mobile", stars: 4296, openIssues: 44, language: "TypeScript", archived: true},
  {id: 8, name: "cli", stars: 5026, openIssues: 80, language: "TypeScript", archived: true}
];

app.delete('/repos/:id', (req, res) => {
  const item = repos.find((x) => x.id === Number(req.params.id) && !x.deletedAt);
  if (!item) return res.status(404).json({ error: 'Not found' });
  item.deletedAt = '2026-01-01';
  res.status(204).end();
});
app.get('/repos', (req, res) => res.json(repos.filter((x) => !x.deletedAt).map((x) => x.name)));
