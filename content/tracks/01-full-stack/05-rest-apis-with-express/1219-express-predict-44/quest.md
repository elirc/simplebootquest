---
slug: "express-predict-44"
title: "What Does the Server Respond? #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cars/4` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{}`","`{\"n\":8}`","`{\"n\":9}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What status code does `GET /flights` get?\n\n```js\nconst app = express();\napp.get('/flights', async () => {\n  throw new Error('db down');\n});\n```","options":["500","201","422","200"],"answer":0,"explanation":"The real response is 500."},{"prompt":"What status code does `GET /books` get?\n\n```js\nconst app = express();\napp.get('/books', async () => {\n  throw new Error('db down');\n});\n```","options":["500","204","200","400"],"answer":0,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /plants/stats` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/plants/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /books?page=5` get?\n\n```js\nconst app = express();\napp.get('/books', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":\"5\",\"type\":\"string\"}`","`{}`","`{\"page\":5,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #44

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
