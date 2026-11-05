---
slug: "express-predict-45"
title: "What Does the Server Respond? #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /songs` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/songs', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["422","401","200","500"],"answer":0,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /students/stats` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/students/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What status code does `POST /movies` get?\n\n```js\nconst app = express();\napp.post('/movies', (req, res) => res.sendStatus(201));\n```","options":["400","422","201","404"],"answer":2,"explanation":"The real response is 201."},{"prompt":"What JSON body does `GET /repos?page=1` get?\n\n```js\nconst app = express();\napp.get('/repos', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"1\",\"type\":\"string\"}`","`{\"page\":1,\"type\":\"stringx\"}`"],"answer":2,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `POST /cities` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/cities', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."}]
---
# What Does the Server Respond? #45

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
