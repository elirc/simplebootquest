---
slug: "express-predict-92"
title: "What Does the Server Respond? #92"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tasks/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /orders/5` get?\n\n```js\nconst app = express();\napp.use('/orders', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/orders/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/5\"}`","`{}`","`{\"seen\":\"/5x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What JSON body does `GET /workouts/stats` get?\n\n```js\nconst app = express();\napp.get('/workouts/stats', (req, res) => res.json({ count: 1 }));\napp.get('/workouts/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":2}`","`{\"count\":1}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What status code does `POST /transactions` get?\n\n```js\nconst app = express();\napp.post('/transactions', (req, res) => res.sendStatus(204));\n```","options":["200","204","422","500"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /orders/4` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/orders/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #92

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
