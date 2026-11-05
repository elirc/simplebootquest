---
slug: "express-predict-91"
title: "What Does the Server Respond? #91"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks/2` get?\n\n```js\nconst app = express();\napp.use('/tasks', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/tasks/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/2\"}`","`{\"seen\":\"/2x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What JSON body does `GET /transactions/5` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{}`","`{\"n\":\"55\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":55}`"],"answer":1,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `POST /employees` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/employees', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{}`","`{\"got\":null}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":3,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What status code does `GET /courses` get?\n\n```js\nconst app = express();\napp.get('/courses', async () => {\n  throw new Error('db down');\n});\n```","options":["204","404","500","401"],"answer":2,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /cars?page=1` get?\n\n```js\nconst app = express();\napp.get('/cars', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":1,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"1\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #91

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
