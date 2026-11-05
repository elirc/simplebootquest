---
slug: "express-predict-32"
title: "What Does the Server Respond? #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /orders?page=1` get?\n\n```js\nconst app = express();\napp.get('/orders', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":1,\"type\":\"stringx\"}`","`{\"page\":\"1\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /workouts` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/workouts', (req, res) => res.json([]));\n```","options":["204","201","500","401"],"answer":3,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /cars/3` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/cars/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /transactions/5` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/transactions/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /flights/stats` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/flights/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #32

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
