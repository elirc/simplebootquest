---
slug: "express-predict-61"
title: "What Does the Server Respond? #61"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `DELETE /employees` get?\n\n```js\nconst app = express();\napp.get('/employees', (req, res) => res.json([]));\n```","options":["422","200","404","204"],"answer":2,"explanation":"The real response is 404."},{"prompt":"What JSON body does `GET /products/stats` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/products/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /cars/5` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"n\":\"55\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":55}`"],"answer":0,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `GET /employees/stats` get?\n\n```js\nconst app = express();\napp.get('/employees/stats', (req, res) => res.json({ count: 3 }));\napp.get('/employees/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{}`","`{\"count\":3}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"count\":3}`."},{"prompt":"What JSON body does `GET /songs/5` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/songs/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #61

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
