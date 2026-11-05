---
slug: "express-predict-55"
title: "What Does the Server Respond? #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /songs` get?\n\n```js\nconst app = express();\napp.get('/songs', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["201","401","503","400"],"answer":2,"explanation":"The real response is 503."},{"prompt":"What status code does `GET /transactions` get?\n\n```js\nconst app = express();\napp.get('/transactions', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["422","503","500","204"],"answer":1,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /courses/1` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/courses/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `POST /tasks` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/tasks', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["404","500","200","422"],"answer":3,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /recipes/stats` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/recipes/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #55

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
