---
slug: "express-predict-49"
title: "What Does the Server Respond? #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /products` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/products', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["401","404","400","422"],"answer":3,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /transactions/3` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"n\":33}`","`{}`","`{\"n\":\"33\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /cars/3` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{}`","`{\"n\":\"33\"}`","`{\"n\":33}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /employees/1` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/employees/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `GET /recipes` get?\n\n```js\nconst app = express();\napp.get('/recipes', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["201","503","200","500"],"answer":1,"explanation":"The real response is 503."}]
---
# What Does the Server Respond? #49

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
