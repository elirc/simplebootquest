---
slug: "express-predict-43"
title: "What Does the Server Respond? #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /flights?page=1` get?\n\n```js\nconst app = express();\napp.get('/flights', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":1,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"1\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /employees/4` get?\n\n```js\nconst app = express();\napp.use('/employees', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/employees/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/4\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/4x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What JSON body does `GET /tickets/3` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ n: req.params.id + 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":33}`","`{\"n\":\"33\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"33\"}`."},{"prompt":"What JSON body does `GET /courses/4` get?\n\n```js\nconst app = express();\napp.use('/courses', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/courses/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/4x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/4\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What status code does `GET /cars` get?\n\n```js\nconst app = express();\napp.get('/cars', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["200","201","401","422"],"answer":0,"explanation":"The real response is 200."}]
---
# What Does the Server Respond? #43

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
