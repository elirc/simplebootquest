---
slug: "express-predict-123"
title: "What Does the Server Respond? #123"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /products/stats` get?\n\n```js\nconst app = express();\napp.get('/products/stats', (req, res) => res.json({ count: 2 }));\napp.get('/products/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`","`{}`"],"answer":0,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `GET /plants/3` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/plants/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/stats', (req, res) => res.json({ count: 4 }));\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":5}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":4}`","`{}`"],"answer":2,"explanation":"The real response is `{\"count\":4}`."},{"prompt":"What JSON body does `GET /plants/2` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":22}`","`{\"n\":\"22\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /events/5` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/events/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #123

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
