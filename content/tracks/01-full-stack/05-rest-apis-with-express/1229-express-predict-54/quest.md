---
slug: "express-predict-54"
title: "What Does the Server Respond? #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /workouts/stats` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/workouts/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /books/1` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"n\":3}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":2}`"],"answer":3,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /cities/2` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"22\"}`","`{}`","`{\"n\":22}`"],"answer":1,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /orders/5` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{}`","`{\"n\":55}`","`{\"n\":\"55\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `GET /courses/5` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/courses/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #54

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
