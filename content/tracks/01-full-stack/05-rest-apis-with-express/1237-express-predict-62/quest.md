---
slug: "express-predict-62"
title: "What Does the Server Respond? #62"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /flights` get?\n\n```js\nconst app = express();\napp.get('/flights', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["201","404","200","422"],"answer":2,"explanation":"The real response is 200."},{"prompt":"What JSON body does `POST /courses` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/courses', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`"],"answer":0,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What status code does `GET /plants` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/plants', (req, res) => res.json([]));\n```","options":["201","204","401","422"],"answer":2,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /books/1` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/books/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `GET /transactions` get?\n\n```js\nconst app = express();\napp.get('/transactions', async () => {\n  throw new Error('db down');\n});\n```","options":["500","400","422","201"],"answer":0,"explanation":"The real response is 500."}]
---
# What Does the Server Respond? #62

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
