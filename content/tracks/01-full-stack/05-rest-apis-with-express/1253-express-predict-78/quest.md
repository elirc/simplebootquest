---
slug: "express-predict-78"
title: "What Does the Server Respond? #78"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /workouts` get?\n\n```js\nconst app = express();\napp.get('/workouts', async () => {\n  throw new Error('db down');\n});\n```","options":["500","400","200","401"],"answer":0,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /tickets/5` get?\n\n```js\nconst app = express();\napp.use('/tickets', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/tickets/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/5x\"}`","`{}`","`{\"seen\":\"/5\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What JSON body does `GET /students/stats` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/students/stats', (req, res) => res.json({ count: 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /cars/2` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/cars/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /repos/1` get?\n\n```js\nconst app = express();\napp.use('/repos', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/repos/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/1\"}`","`{\"seen\":\"/1x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/1\"}`."}]
---
# What Does the Server Respond? #78

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
