---
slug: "express-predict-93"
title: "What Does the Server Respond? #93"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks?page=4` get?\n\n```js\nconst app = express();\napp.get('/tasks', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":4,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"4\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /recipes/5` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"n\":55}`","`{\"n\":\"55\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `GET /hotels?page=3` get?\n\n```js\nconst app = express();\napp.get('/hotels', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"3\",\"type\":\"string\"}`","`{\"page\":3,\"type\":\"stringx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /flights/4` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":9}`","`{\"n\":8}`","`{}`"],"answer":2,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /transactions/2` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{}`","`{\"n\":4}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":5}`"],"answer":1,"explanation":"The real response is `{\"n\":4}`."}]
---
# What Does the Server Respond? #93

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
