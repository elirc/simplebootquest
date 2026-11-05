---
slug: "express-predict-86"
title: "What Does the Server Respond? #86"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /products/stats` get?\n\n```js\nconst app = express();\napp.get('/products/stats', (req, res) => res.json({ count: 1 }));\napp.get('/products/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"count\":2}`","`{}`","`{\"count\":1}`"],"answer":3,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /songs?page=3` get?\n\n```js\nconst app = express();\napp.get('/songs', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"3\",\"type\":\"string\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"page\":3,\"type\":\"stringx\"}`"],"answer":0,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /hotels/3` get?\n\n```js\nconst app = express();\napp.use('/hotels', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/hotels/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/3\"}`","`{\"seen\":\"/3x\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/3\"}`."},{"prompt":"What JSON body does `GET /repos?page=2` get?\n\n```js\nconst app = express();\napp.get('/repos', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":2,\"type\":\"stringx\"}`","`{\"page\":\"2\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /students/5` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"n\":\"55\"}`","`{\"n\":55}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":\"55\"}`."}]
---
# What Does the Server Respond? #86

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
