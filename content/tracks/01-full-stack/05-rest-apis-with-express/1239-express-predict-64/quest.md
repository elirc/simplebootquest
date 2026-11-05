---
slug: "express-predict-64"
title: "What Does the Server Respond? #64"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /books` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/books', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["404","500","422","204"],"answer":2,"explanation":"The real response is 422."},{"prompt":"What status code does `POST /plants` get?\n\n```js\nconst app = express();\napp.post('/plants', (req, res) => res.sendStatus(202));\n```","options":["202","201","204","404"],"answer":0,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /hotels?page=1` get?\n\n```js\nconst app = express();\napp.get('/hotels', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":1,\"type\":\"stringx\"}`","`{\"page\":\"1\",\"type\":\"string\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /transactions/stats` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/transactions/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /hotels/1` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/hotels/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #64

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
