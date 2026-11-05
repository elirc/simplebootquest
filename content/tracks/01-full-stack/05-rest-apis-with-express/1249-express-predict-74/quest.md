---
slug: "express-predict-74"
title: "What Does the Server Respond? #74"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /students?page=3` get?\n\n```js\nconst app = express();\napp.get('/students', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":3,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"3\",\"type\":\"string\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /cars` get?\n\n```js\nconst app = express();\napp.get('/cars', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["503","422","400","500"],"answer":0,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /transactions/stats` get?\n\n```js\nconst app = express();\napp.get('/transactions/stats', (req, res) => res.json({ count: 4 }));\napp.get('/transactions/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{\"count\":5}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"count\":4}`."},{"prompt":"What JSON body does `GET /orders/3` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"n\":33}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"33\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What status code does `POST /books` get?\n\n```js\nconst app = express();\napp.post('/books', (req, res) => res.sendStatus(201));\n```","options":["500","204","422","201"],"answer":3,"explanation":"The real response is 201."}]
---
# What Does the Server Respond? #74

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
