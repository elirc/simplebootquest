---
slug: "express-predict-106"
title: "What Does the Server Respond? #106"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks/5` get?\n\n```js\nconst app = express();\napp.use('/tasks', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/tasks/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/5\"}`","`{}`","`{\"seen\":\"/5x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What status code does `POST /workouts` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/workouts', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["400","404","401","422"],"answer":3,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /tickets/4` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/tickets/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /cities?page=2` get?\n\n```js\nconst app = express();\napp.get('/cities', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"2\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":2,\"type\":\"stringx\"}`"],"answer":0,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /transactions/4` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"n\":9}`","`{\"n\":8}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":8}`."}]
---
# What Does the Server Respond? #106

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
