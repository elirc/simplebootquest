---
slug: "express-predict-111"
title: "What Does the Server Respond? #111"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets?page=5` get?\n\n```js\nconst app = express();\napp.get('/tickets', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"5\",\"type\":\"string\"}`","`{}`","`{\"page\":5,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /books/stats` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/books/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /employees/3` get?\n\n```js\nconst app = express();\napp.use('/employees', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/employees/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/3x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/3\"}`"],"answer":3,"explanation":"The real response is `{\"seen\":\"/3\"}`."},{"prompt":"What JSON body does `GET /flights/4` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/flights/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What status code does `POST /songs` get?\n\n```js\nconst app = express();\napp.post('/songs', (req, res) => res.sendStatus(201));\n```","options":["201","400","422","401"],"answer":0,"explanation":"The real response is 201."}]
---
# What Does the Server Respond? #111

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
