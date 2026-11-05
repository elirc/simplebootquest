---
slug: "express-predict-21"
title: "What Does the Server Respond? #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /workouts/2` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/workouts/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `POST /movies` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/movies', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{}`","`{\"got\":null}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":3,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /flights/stats` get?\n\n```js\nconst app = express();\napp.get('/flights/stats', (req, res) => res.json({ count: 1 }));\napp.get('/flights/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":1}`","`{\"count\":2}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /employees?page=2` get?\n\n```js\nconst app = express();\napp.get('/employees', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":2,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"2\",\"type\":\"string\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `POST /repos` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/repos', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{}`"],"answer":1,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."}]
---
# What Does the Server Respond? #21

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
