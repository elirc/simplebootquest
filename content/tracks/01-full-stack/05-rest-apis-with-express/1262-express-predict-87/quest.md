---
slug: "express-predict-87"
title: "What Does the Server Respond? #87"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /plants/4` get?\n\n```js\nconst app = express();\napp.use('/plants', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/plants/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/4\"}`","`{\"seen\":\"/4x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What JSON body does `GET /students/2` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/students/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /events/3` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":33}`","`{}`","`{\"n\":\"33\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /recipes?page=3` get?\n\n```js\nconst app = express();\napp.get('/recipes', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"3\",\"type\":\"string\"}`","`{\"page\":3,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /movies/stats` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/movies/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #87

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
