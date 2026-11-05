---
slug: "express-predict-117"
title: "What Does the Server Respond? #117"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /hotels/stats` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/hotels/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"statsx\"}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /workouts/5` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/workouts/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /students/stats` get?\n\n```js\nconst app = express();\napp.get('/students/stats', (req, res) => res.json({ count: 2 }));\napp.get('/students/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"count\":2}`","`{\"count\":3}`","`{}`"],"answer":1,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `GET /students/3` get?\n\n```js\nconst app = express();\napp.use('/students', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/students/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/3x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/3\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/3\"}`."},{"prompt":"What JSON body does `GET /transactions?page=2` get?\n\n```js\nconst app = express();\napp.get('/transactions', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":2,\"type\":\"stringx\"}`","`{}`","`{\"page\":\"2\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #117

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
