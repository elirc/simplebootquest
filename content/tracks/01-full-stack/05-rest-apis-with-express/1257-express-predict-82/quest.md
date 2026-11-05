---
slug: "express-predict-82"
title: "What Does the Server Respond? #82"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /courses/4` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/courses/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /flights?page=3` get?\n\n```js\nconst app = express();\napp.get('/flights', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"3\",\"type\":\"string\"}`","`{\"page\":3,\"type\":\"stringx\"}`"],"answer":2,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /movies/5` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{\"n\":10}`","`{\"n\":11}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/stats', (req, res) => res.json({ count: 5 }));\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"count\":5}`","`{\"count\":6}`","`{}`"],"answer":1,"explanation":"The real response is `{\"count\":5}`."},{"prompt":"What JSON body does `GET /orders/stats` get?\n\n```js\nconst app = express();\napp.get('/orders/stats', (req, res) => res.json({ count: 3 }));\napp.get('/orders/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`"],"answer":3,"explanation":"The real response is `{\"count\":3}`."}]
---
# What Does the Server Respond? #82

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
