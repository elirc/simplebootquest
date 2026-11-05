---
slug: "express-predict-83"
title: "What Does the Server Respond? #83"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /flights/5` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/flights/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /tasks/2` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"n\":\"22\"}`","`{\"n\":22}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /courses/1` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":11}`","`{\"n\":\"11\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What status code does `POST /repos` get?\n\n```js\nconst app = express();\napp.post('/repos', (req, res) => res.sendStatus(204));\n```","options":["404","422","401","204"],"answer":3,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /tasks/1` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"11\"}`","`{\"n\":11}`"],"answer":2,"explanation":"The real response is `{\"n\":\"11\"}`."}]
---
# What Does the Server Respond? #83

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
