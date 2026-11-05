---
slug: "express-predict-35"
title: "What Does the Server Respond? #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /courses` get?\n\n```js\nconst app = express();\napp.post('/courses', (req, res) => res.sendStatus(204));\n```","options":["400","204","401","200"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /orders?page=2` get?\n\n```js\nconst app = express();\napp.get('/orders', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"2\",\"type\":\"string\"}`","`{\"page\":2,\"type\":\"stringx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /students/3` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/students/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /tickets/stats` get?\n\n```js\nconst app = express();\napp.get('/tickets/stats', (req, res) => res.json({ count: 2 }));\napp.get('/tickets/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":3}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":2}`","`{}`"],"answer":2,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `GET /repos/2` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"n\":22}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"22\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"22\"}`."}]
---
# What Does the Server Respond? #35

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
