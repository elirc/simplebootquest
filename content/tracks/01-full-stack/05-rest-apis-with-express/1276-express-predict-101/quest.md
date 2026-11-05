---
slug: "express-predict-101"
title: "What Does the Server Respond? #101"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cities?page=5` get?\n\n```js\nconst app = express();\napp.get('/cities', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"5\",\"type\":\"string\"}`","`{}`","`{\"page\":5,\"type\":\"stringx\"}`"],"answer":1,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /hotels/stats` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/hotels/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /cities/4` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":8}`","`{\"n\":9}`"],"answer":2,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /tickets?page=3` get?\n\n```js\nconst app = express();\napp.get('/tickets', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":3,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"3\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /songs?page=1` get?\n\n```js\nconst app = express();\napp.get('/songs', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{}`","`{\"page\":\"1\",\"type\":\"string\"}`","`{\"page\":1,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #101

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
