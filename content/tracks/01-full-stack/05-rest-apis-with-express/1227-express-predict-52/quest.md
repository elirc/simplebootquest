---
slug: "express-predict-52"
title: "What Does the Server Respond? #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /plants/stats` get?\n\n```js\nconst app = express();\napp.get('/plants/stats', (req, res) => res.json({ count: 2 }));\napp.get('/plants/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{}`","`{\"count\":3}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What status code does `GET /employees` get?\n\n```js\nconst app = express();\napp.get('/employees', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["201","204","200","503"],"answer":3,"explanation":"The real response is 503."},{"prompt":"What status code does `POST /plants` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/plants', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["400","422","404","200"],"answer":1,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /recipes?page=2` get?\n\n```js\nconst app = express();\napp.get('/recipes', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"page\":\"2\",\"type\":\"string\"}`","`{}`","`{\"page\":2,\"type\":\"stringx\"}`"],"answer":1,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /products/1` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":11}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"11\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"11\"}`."}]
---
# What Does the Server Respond? #52

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
