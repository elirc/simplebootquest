---
slug: "express-predict-28"
title: "What Does the Server Respond? #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /tickets` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/tickets', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["503","422","404","204"],"answer":1,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /employees/3` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/employees/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /songs/3` get?\n\n```js\nconst app = express();\napp.use('/songs', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/songs/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"seen\":\"/3x\"}`","`{\"seen\":\"/3\"}`"],"answer":3,"explanation":"The real response is `{\"seen\":\"/3\"}`."},{"prompt":"What JSON body does `GET /repos/2` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/repos/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `POST /students` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/students', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{}`","`{\"id\":\"stats\"}`"],"answer":0,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."}]
---
# What Does the Server Respond? #28

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
