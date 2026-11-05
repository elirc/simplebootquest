---
slug: "express-predict-102"
title: "What Does the Server Respond? #102"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /hotels` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/hotels', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["404","200","400","422"],"answer":3,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /employees?page=3` get?\n\n```js\nconst app = express();\napp.get('/employees', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"3\",\"type\":\"string\"}`","`{}`","`{\"page\":3,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"page\":\"3\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /repos/stats` get?\n\n```js\nconst app = express();\napp.get('/repos/stats', (req, res) => res.json({ count: 1 }));\napp.get('/repos/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":1}`","`{\"count\":2}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What status code does `POST /cities` get?\n\n```js\nconst app = express();\napp.post('/cities', (req, res) => res.sendStatus(202));\n```","options":["202","204","401","404"],"answer":0,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /cities/4` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/cities/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"secondx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."}]
---
# What Does the Server Respond? #102

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
