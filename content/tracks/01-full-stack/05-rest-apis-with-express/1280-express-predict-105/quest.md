---
slug: "express-predict-105"
title: "What Does the Server Respond? #105"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets?page=1` get?\n\n```js\nconst app = express();\napp.get('/tickets', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"1\",\"type\":\"string\"}`","`{}`","`{\"page\":1,\"type\":\"stringx\"}`"],"answer":1,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /hotels/1` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"n\":2}`","`{\"n\":3}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What status code does `GET /tickets` get?\n\n```js\nconst app = express();\napp.get('/tickets', async () => {\n  throw new Error('db down');\n});\n```","options":["404","401","500","422"],"answer":2,"explanation":"The real response is 500."},{"prompt":"What status code does `POST /courses` get?\n\n```js\nconst app = express();\napp.post('/courses', (req, res) => res.sendStatus(201));\n```","options":["500","503","200","201"],"answer":3,"explanation":"The real response is 201."},{"prompt":"What JSON body does `GET /hotels/2` get?\n\n```js\nconst app = express();\napp.get('/hotels/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/hotels/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #105

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
