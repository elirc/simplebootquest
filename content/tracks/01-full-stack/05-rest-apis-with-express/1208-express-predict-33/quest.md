---
slug: "express-predict-33"
title: "What Does the Server Respond? #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /plants` get?\n\n```js\nconst app = express();\napp.get('/plants', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["204","201","200","400"],"answer":2,"explanation":"The real response is 200."},{"prompt":"What JSON body does `GET /employees/5` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/employees/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /movies/3` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{}`","`{\"n\":33}`","`{\"n\":\"33\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /repos/stats` get?\n\n```js\nconst app = express();\napp.get('/repos/stats', (req, res) => res.json({ count: 4 }));\napp.get('/repos/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":4}`","`{\"count\":5}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"count\":4}`."},{"prompt":"What JSON body does `GET /orders/3` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/orders/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{}`","`{\"from\":\"secondx\"}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #33

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
