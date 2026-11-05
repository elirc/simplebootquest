---
slug: "express-predict-10"
title: "What Does the Server Respond? #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /books` get?\n\n```js\nconst app = express();\napp.get('/books', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["200","503","404","201"],"answer":1,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /orders/stats` get?\n\n```js\nconst app = express();\napp.get('/orders/stats', (req, res) => res.json({ count: 5 }));\napp.get('/orders/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":6}`","`{\"count\":5}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"count\":5}`."},{"prompt":"What status code does `GET /orders` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/orders', (req, res) => res.json([]));\n```","options":["401","204","200","422"],"answer":0,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /employees?page=5` get?\n\n```js\nconst app = express();\napp.get('/employees', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":5,\"type\":\"stringx\"}`","`{\"page\":\"5\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /plants/stats` get?\n\n```js\nconst app = express();\napp.get('/plants/stats', (req, res) => res.json({ count: 3 }));\napp.get('/plants/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`","`{\"count\":4}`"],"answer":2,"explanation":"The real response is `{\"count\":3}`."}]
---
# What Does the Server Respond? #10

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
