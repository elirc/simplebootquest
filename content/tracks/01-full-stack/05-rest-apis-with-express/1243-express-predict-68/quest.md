---
slug: "express-predict-68"
title: "What Does the Server Respond? #68"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `DELETE /courses` get?\n\n```js\nconst app = express();\napp.get('/courses', (req, res) => res.json([]));\n```","options":["404","401","201","422"],"answer":0,"explanation":"The real response is 404."},{"prompt":"What JSON body does `GET /events/2` get?\n\n```js\nconst app = express();\napp.use('/events', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/events/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/2\"}`","`{}`","`{\"seen\":\"/2x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What JSON body does `GET /flights/2` get?\n\n```js\nconst app = express();\napp.use('/flights', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/flights/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/2\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/2x\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What JSON body does `GET /tasks?page=3` get?\n\n```js\nconst app = express();\napp.get('/tasks', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":3,\"type\":\"stringx\"}`","`{\"page\":\"3\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /flights/5` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"n\":\"55\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":55}`"],"answer":0,"explanation":"The real response is `{\"n\":\"55\"}`."}]
---
# What Does the Server Respond? #68

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
