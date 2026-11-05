---
slug: "express-predict-112"
title: "What Does the Server Respond? #112"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /books/3` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"n\":7}`","`{\"n\":6}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What JSON body does `GET /orders/2` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/orders/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /hotels/stats` get?\n\n```js\nconst app = express();\napp.get('/hotels/stats', (req, res) => res.json({ count: 1 }));\napp.get('/hotels/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"count\":2}`","`{}`","`{\"count\":1}`"],"answer":3,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What status code does `POST /plants` get?\n\n```js\nconst app = express();\napp.post('/plants', (req, res) => res.sendStatus(204));\n```","options":["404","204","400","503"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What status code does `GET /books` get?\n\n```js\nconst app = express();\napp.get('/books', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["500","400","200","503"],"answer":2,"explanation":"The real response is 200."}]
---
# What Does the Server Respond? #112

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
