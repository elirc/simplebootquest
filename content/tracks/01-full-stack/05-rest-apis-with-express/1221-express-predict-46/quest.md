---
slug: "express-predict-46"
title: "What Does the Server Respond? #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /songs/stats` get?\n\n```js\nconst app = express();\napp.get('/songs/stats', (req, res) => res.json({ count: 2 }));\napp.get('/songs/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":3}`","`{\"count\":2}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `GET /tasks/5` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/tasks/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `POST /plants` get?\n\n```js\nconst app = express();\napp.post('/plants', (req, res) => res.sendStatus(201));\n```","options":["503","201","204","401"],"answer":1,"explanation":"The real response is 201."},{"prompt":"What status code does `GET /workouts` get?\n\n```js\nconst app = express();\napp.get('/workouts', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["201","200","500","404"],"answer":1,"explanation":"The real response is 200."},{"prompt":"What JSON body does `GET /songs/stats` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/songs/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{}`","`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #46

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
