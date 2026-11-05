---
slug: "express-predict-96"
title: "What Does the Server Respond? #96"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /events/4` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/events/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /events/1` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"11\"}`","`{\"n\":11}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /songs?page=4` get?\n\n```js\nconst app = express();\napp.get('/songs', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"4\",\"type\":\"string\"}`","`{\"page\":4,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /books/stats` get?\n\n```js\nconst app = express();\napp.get('/books/stats', (req, res) => res.json({ count: 2 }));\napp.get('/books/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`"],"answer":0,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What status code does `POST /students` get?\n\n```js\nconst app = express();\napp.post('/students', (req, res) => res.sendStatus(204));\n```","options":["204","503","500","404"],"answer":0,"explanation":"The real response is 204."}]
---
# What Does the Server Respond? #96

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
