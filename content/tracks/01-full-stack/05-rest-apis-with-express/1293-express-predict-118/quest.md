---
slug: "express-predict-118"
title: "What Does the Server Respond? #118"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets/3` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"n\":6}`","`{\"n\":7}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What JSON body does `GET /products/1` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":2}`","`{}`","`{\"n\":3}`"],"answer":1,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /courses/5` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"n\":\"55\"}`","`{}`","`{\"n\":55}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `GET /recipes?page=5` get?\n\n```js\nconst app = express();\napp.get('/recipes', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"5\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":5,\"type\":\"stringx\"}`"],"answer":0,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /repos/stats` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/repos/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{}`","`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #118

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
