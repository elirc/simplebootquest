---
slug: "express-predict-3"
title: "What Does the Server Respond? #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets/4` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":8}`","`{\"n\":9}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /products/2` get?\n\n```js\nconst app = express();\napp.use('/products', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/products/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/2x\"}`","`{\"seen\":\"/2\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What JSON body does `GET /transactions/stats` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/transactions/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What status code does `GET /tasks` get?\n\n```js\nconst app = express();\napp.get('/tasks', async () => {\n  throw new Error('db down');\n});\n```","options":["201","422","404","500"],"answer":3,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /songs/2` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"n\":22}`","`{\"n\":\"22\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":\"22\"}`."}]
---
# What Does the Server Respond? #3

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
