---
slug: "express-predict-14"
title: "What Does the Server Respond? #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /workouts` get?\n\n```js\nconst app = express();\napp.get('/workouts', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["201","422","401","503"],"answer":3,"explanation":"The real response is 503."},{"prompt":"What JSON body does `GET /repos/stats` get?\n\n```js\nconst app = express();\napp.get('/repos/stats', (req, res) => res.json({ count: 3 }));\napp.get('/repos/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":3}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"count\":4}`"],"answer":0,"explanation":"The real response is `{\"count\":3}`."},{"prompt":"What status code does `GET /products` get?\n\n```js\nconst app = express();\napp.get('/products', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["400","401","204","200"],"answer":3,"explanation":"The real response is 200."},{"prompt":"What JSON body does `GET /books?page=4` get?\n\n```js\nconst app = express();\napp.get('/books', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":4,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"4\",\"type\":\"string\"}`"],"answer":3,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /products` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/products', (req, res) => res.json([]));\n```","options":["401","422","200","201"],"answer":0,"explanation":"The real response is 401."}]
---
# What Does the Server Respond? #14

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
