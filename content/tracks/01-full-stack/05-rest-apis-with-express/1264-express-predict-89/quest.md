---
slug: "express-predict-89"
title: "What Does the Server Respond? #89"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks/4` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/tasks/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `GET /transactions` get?\n\n```js\nconst app = express();\napp.get('/transactions', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["204","200","503","500"],"answer":1,"explanation":"The real response is 200."},{"prompt":"What JSON body does `GET /workouts/stats` get?\n\n```js\nconst app = express();\napp.get('/workouts/stats', (req, res) => res.json({ count: 2 }));\napp.get('/workouts/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":3}`","`{\"count\":2}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `GET /tickets/stats` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tickets/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /students/stats` get?\n\n```js\nconst app = express();\napp.get('/students/stats', (req, res) => res.json({ count: 5 }));\napp.get('/students/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":6}`","`{\"count\":5}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"count\":5}`."}]
---
# What Does the Server Respond? #89

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
