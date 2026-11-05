---
slug: "express-predict-128"
title: "What Does the Server Respond? #128"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /movies/1` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{}`","`{\"n\":2}`","`{\"n\":3}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /books?page=1` get?\n\n```js\nconst app = express();\napp.get('/books', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":1,\"type\":\"stringx\"}`","`{\"page\":\"1\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /songs?page=5` get?\n\n```js\nconst app = express();\napp.get('/songs', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"5\",\"type\":\"string\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":5,\"type\":\"stringx\"}`"],"answer":0,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /transactions/1` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":2}`","`{}`","`{\"n\":3}`"],"answer":1,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /hotels/5` get?\n\n```js\nconst app = express();\napp.use('/hotels', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/hotels/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/5\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/5x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/5\"}`."}]
---
# What Does the Server Respond? #128

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
