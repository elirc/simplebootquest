---
slug: "express-predict-100"
title: "What Does the Server Respond? #100"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cities/5` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":55}`","`{\"n\":\"55\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `GET /movies/stats` get?\n\n```js\nconst app = express();\napp.get('/movies/stats', (req, res) => res.json({ count: 1 }));\napp.get('/movies/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{}`","`{\"count\":1}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /flights/3` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":33}`","`{}`","`{\"n\":\"33\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /repos/5` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/repos/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /courses/1` get?\n\n```js\nconst app = express();\napp.use('/courses', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/courses/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/1\"}`","`{}`","`{\"seen\":\"/1x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/1\"}`."}]
---
# What Does the Server Respond? #100

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
