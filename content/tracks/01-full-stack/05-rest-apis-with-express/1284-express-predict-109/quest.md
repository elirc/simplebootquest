---
slug: "express-predict-109"
title: "What Does the Server Respond? #109"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /products/5` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{\"n\":10}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":11}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /orders/stats` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/orders/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /workouts?page=1` get?\n\n```js\nconst app = express();\napp.get('/workouts', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":1,\"type\":\"stringx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"1\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /employees/stats` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/employees/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /songs/3` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"n\":\"33\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":33}`"],"answer":0,"explanation":"The real response is `{\"n\":\"33\"}`."}]
---
# What Does the Server Respond? #109

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
