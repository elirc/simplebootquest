---
slug: "express-predict-60"
title: "What Does the Server Respond? #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets/4` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{}`","`{\"n\":\"44\"}`","`{\"n\":44}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /employees/3` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":6}`","`{}`","`{\"n\":7}`"],"answer":1,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What JSON body does `GET /orders?page=3` get?\n\n```js\nconst app = express();\napp.get('/orders', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{}`","`{\"page\":3,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"3\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /workouts/4` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"44\"}`","`{\"n\":44}`"],"answer":2,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /plants/5` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/plants/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #60

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
