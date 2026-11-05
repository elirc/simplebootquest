---
slug: "express-predict-42"
title: "What Does the Server Respond? #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /cities` get?\n\n```js\nconst app = express();\napp.get('/cities', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["503","422","500","200"],"answer":3,"explanation":"The real response is 200."},{"prompt":"What status code does `POST /courses` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/courses', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["422","204","503","200"],"answer":0,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /songs/1` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/songs/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /orders?page=4` get?\n\n```js\nconst app = express();\napp.get('/orders', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{}`","`{\"page\":\"4\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":4,\"type\":\"stringx\"}`"],"answer":1,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /tasks` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/tasks', (req, res) => res.json([]));\n```","options":["503","500","401","400"],"answer":2,"explanation":"The real response is 401."}]
---
# What Does the Server Respond? #42

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
