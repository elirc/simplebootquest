---
slug: "express-predict-98"
title: "What Does the Server Respond? #98"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /orders/1` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/orders/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /movies/stats` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/movies/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `POST /orders` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/orders', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{\"id\":\"stats\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /employees/4` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"n\":9}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":8}`"],"answer":3,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /recipes/1` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"n\":2}`","`{\"n\":3}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":2}`."}]
---
# What Does the Server Respond? #98

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
