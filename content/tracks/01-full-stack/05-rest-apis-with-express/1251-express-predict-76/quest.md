---
slug: "express-predict-76"
title: "What Does the Server Respond? #76"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cities/stats` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/cities/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What status code does `DELETE /flights` get?\n\n```js\nconst app = express();\napp.get('/flights', (req, res) => res.json([]));\n```","options":["200","422","404","401"],"answer":2,"explanation":"The real response is 404."},{"prompt":"What JSON body does `GET /songs/1` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":3}`","`{\"n\":2}`","`{}`"],"answer":2,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /transactions/2` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/transactions/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /students/stats` get?\n\n```js\nconst app = express();\napp.get('/students/stats', (req, res) => res.json({ count: 3 }));\napp.get('/students/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`","`{}`"],"answer":2,"explanation":"The real response is `{\"count\":3}`."}]
---
# What Does the Server Respond? #76

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
