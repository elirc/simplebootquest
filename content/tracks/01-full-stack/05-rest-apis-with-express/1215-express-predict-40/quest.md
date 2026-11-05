---
slug: "express-predict-40"
title: "What Does the Server Respond? #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /hotels` get?\n\n```js\nconst app = express();\napp.get('/hotels', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["500","503","200","404"],"answer":1,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /flights/stats` get?\n\n```js\nconst app = express();\napp.get('/flights/stats', (req, res) => res.json({ count: 2 }));\napp.get('/flights/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":3}`","`{\"count\":2}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What status code does `GET /cities` get?\n\n```js\nconst app = express();\napp.get('/cities', async () => {\n  throw new Error('db down');\n});\n```","options":["401","201","500","404"],"answer":2,"explanation":"The real response is 500."},{"prompt":"What status code does `GET /tickets` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/tickets', (req, res) => res.json([]));\n```","options":["503","404","401","422"],"answer":2,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /books/5` get?\n\n```js\nconst app = express();\napp.use('/books', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/books/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/5\"}`","`{\"seen\":\"/5x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/5\"}`."}]
---
# What Does the Server Respond? #40

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
