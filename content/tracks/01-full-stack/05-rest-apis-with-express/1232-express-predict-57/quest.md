---
slug: "express-predict-57"
title: "What Does the Server Respond? #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cities?page=4` get?\n\n```js\nconst app = express();\napp.get('/cities', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":4,\"type\":\"stringx\"}`","`{}`","`{\"page\":\"4\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /repos` get?\n\n```js\nconst app = express();\napp.get('/repos', async () => {\n  throw new Error('db down');\n});\n```","options":["201","200","500","422"],"answer":2,"explanation":"The real response is 500."},{"prompt":"What status code does `GET /orders` get?\n\n```js\nconst app = express();\napp.get('/orders', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["401","422","200","201"],"answer":2,"explanation":"The real response is 200."},{"prompt":"What JSON body does `GET /employees/5` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{\"n\":10}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":11}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /books/4` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/books/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #57

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
