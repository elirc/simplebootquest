---
slug: "express-predict-129"
title: "What Does the Server Respond? #129"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks/1` get?\n\n```js\nconst app = express();\napp.use('/tasks', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/tasks/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/1\"}`","`{\"seen\":\"/1x\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/1\"}`."},{"prompt":"What JSON body does `GET /cities/1` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"n\":2}`","`{\"n\":3}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /recipes/3` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/recipes/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /movies/stats` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/movies/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /products/3` get?\n\n```js\nconst app = express();\napp.use('/products', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/products/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/3\"}`","`{\"seen\":\"/3x\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/3\"}`."}]
---
# What Does the Server Respond? #129

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
