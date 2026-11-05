---
slug: "express-predict-119"
title: "What Does the Server Respond? #119"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /orders/stats` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/orders/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What status code does `POST /events` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/events', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["500","422","400","503"],"answer":1,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /flights/stats` get?\n\n```js\nconst app = express();\napp.get('/flights/stats', (req, res) => res.json({ count: 4 }));\napp.get('/flights/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":5}`","`{\"count\":4}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"count\":4}`."},{"prompt":"What JSON body does `GET /flights/4` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":44}`","`{}`","`{\"n\":\"44\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /employees/stats` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/employees/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"id\":\"stats\"}`","`{}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #119

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
