---
slug: "express-predict-41"
title: "What Does the Server Respond? #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /transactions/2` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"n\":\"22\"}`","`{\"n\":22}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /cities/stats` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/cities/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What status code does `POST /books` get?\n\n```js\nconst app = express();\napp.post('/books', (req, res) => res.sendStatus(204));\n```","options":["204","500","401","201"],"answer":0,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /courses/3` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{}`","`{\"n\":6}`","`{\"n\":7}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What JSON body does `GET /hotels?page=2` get?\n\n```js\nconst app = express();\napp.get('/hotels', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":2,\"type\":\"stringx\"}`","`{\"page\":\"2\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #41

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
