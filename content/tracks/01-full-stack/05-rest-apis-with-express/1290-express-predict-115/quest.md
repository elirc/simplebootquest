---
slug: "express-predict-115"
title: "What Does the Server Respond? #115"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /flights/1` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/flights/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /tickets/1` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/tickets/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /orders/1` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":3}`","`{\"n\":2}`"],"answer":3,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /transactions/stats` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/transactions/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{\"id\":\"statsx\"}`","`{}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /songs/stats` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/songs/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #115

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
