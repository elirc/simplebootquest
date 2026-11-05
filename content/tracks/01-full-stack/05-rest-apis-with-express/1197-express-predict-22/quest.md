---
slug: "express-predict-22"
title: "What Does the Server Respond? #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /events` get?\n\n```js\nconst app = express();\napp.get('/events', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["503","201","200","204"],"answer":0,"explanation":"The real response is 503."},{"prompt":"What status code does `GET /courses` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/courses', (req, res) => res.json([]));\n```","options":["204","401","404","201"],"answer":1,"explanation":"The real response is 401."},{"prompt":"What JSON body does `POST /transactions` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/transactions', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{}`","`{\"id\":\"stats\"}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What status code does `GET /students` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/students', (req, res) => res.json([]));\n```","options":["200","201","503","401"],"answer":3,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /products/4` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/products/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #22

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
