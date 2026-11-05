---
slug: "express-predict-80"
title: "What Does the Server Respond? #80"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /orders/3` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"n\":6}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":7}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What status code does `POST /recipes` get?\n\n```js\nconst app = express();\napp.post('/recipes', (req, res) => res.sendStatus(204));\n```","options":["503","204","401","200"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /tickets/stats` get?\n\n```js\nconst app = express();\napp.get('/tickets/stats', (req, res) => res.json({ count: 1 }));\napp.get('/tickets/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":1}`","`{}`"],"answer":2,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /flights?page=2` get?\n\n```js\nconst app = express();\napp.get('/flights', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"2\",\"type\":\"string\"}`","`{\"page\":2,\"type\":\"stringx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."},{"prompt":"What status code does `GET /tickets` get?\n\n```js\nconst app = express();\napp.get('/tickets', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["200","401","404","204"],"answer":0,"explanation":"The real response is 200."}]
---
# What Does the Server Respond? #80

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
