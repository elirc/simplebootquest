---
slug: "express-predict-67"
title: "What Does the Server Respond? #67"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `POST /products` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/products', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{}`","`{\"id\":\"stats\"}`"],"answer":0,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /orders/stats` get?\n\n```js\nconst app = express();\napp.get('/orders/stats', (req, res) => res.json({ count: 2 }));\napp.get('/orders/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`","`{}`"],"answer":0,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `GET /books/4` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"n\":44}`","`{\"n\":\"44\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /movies/2` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/movies/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /tickets/stats` get?\n\n```js\nconst app = express();\napp.get('/tickets/stats', (req, res) => res.json({ count: 5 }));\napp.get('/tickets/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":6}`","`{\"count\":5}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"count\":5}`."}]
---
# What Does the Server Respond? #67

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
