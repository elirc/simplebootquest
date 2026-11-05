---
slug: "express-predict-120"
title: "What Does the Server Respond? #120"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /books/1` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":\"11\"}`","`{\"n\":11}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /students/4` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/students/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /products/stats` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/products/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"statsx\"}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /songs/5` get?\n\n```js\nconst app = express();\napp.use('/songs', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/songs/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/5\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/5x\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What JSON body does `GET /movies/stats` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/movies/stats', (req, res) => res.json({ count: 2 }));\n```","options":["`{\"id\":\"statsx\"}`","`{}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #120

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
