---
slug: "express-predict-126"
title: "What Does the Server Respond? #126"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /courses/2` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/courses/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /workouts/1` get?\n\n```js\nconst app = express();\napp.use('/workouts', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/workouts/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/1\"}`","`{\"seen\":\"/1x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/1\"}`."},{"prompt":"What JSON body does `GET /tickets/stats` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tickets/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /flights/stats` get?\n\n```js\nconst app = express();\napp.get('/flights/stats', (req, res) => res.json({ count: 3 }));\napp.get('/flights/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`","`{\"count\":4}`"],"answer":2,"explanation":"The real response is `{\"count\":3}`."},{"prompt":"What JSON body does `GET /students?page=5` get?\n\n```js\nconst app = express();\napp.get('/students', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":5,\"type\":\"stringx\"}`","`{}`","`{\"page\":\"5\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #126

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
