---
slug: "express-predict-114"
title: "What Does the Server Respond? #114"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /plants/1` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/plants/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /songs/4` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{}`","`{\"n\":44}`","`{\"n\":\"44\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /workouts?page=4` get?\n\n```js\nconst app = express();\napp.get('/workouts', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":4,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"4\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /products/4` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":44}`","`{\"n\":\"44\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /repos/stats` get?\n\n```js\nconst app = express();\napp.get('/repos/stats', (req, res) => res.json({ count: 5 }));\napp.get('/repos/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":5}`","`{}`","`{\"count\":6}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"count\":5}`."}]
---
# What Does the Server Respond? #114

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
