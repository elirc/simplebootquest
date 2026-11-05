---
slug: "express-predict-20"
title: "What Does the Server Respond? #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /books/2` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/books/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /employees/1` get?\n\n```js\nconst app = express();\napp.use('/employees', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/employees/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/1\"}`","`{}`","`{\"seen\":\"/1x\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/1\"}`."},{"prompt":"What JSON body does `GET /plants?page=3` get?\n\n```js\nconst app = express();\napp.get('/plants', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":3,\"type\":\"stringx\"}`","`{\"page\":\"3\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /tasks/1` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res, next) => {\n  if (req.params.id === '1') return next();\n  res.json({ from: 'first' });\n});\napp.get('/tasks/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `DELETE /recipes` get?\n\n```js\nconst app = express();\napp.get('/recipes', (req, res) => res.json([]));\n```","options":["401","404","400","500"],"answer":1,"explanation":"The real response is 404."}]
---
# What Does the Server Respond? #20

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
