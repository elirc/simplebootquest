---
slug: "express-predict-110"
title: "What Does the Server Respond? #110"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cities/stats` get?\n\n```js\nconst app = express();\napp.get('/cities/stats', (req, res) => res.json({ count: 2 }));\napp.get('/cities/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`"],"answer":0,"explanation":"The real response is `{\"count\":2}`."},{"prompt":"What JSON body does `POST /books` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/books', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{}`","`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `GET /products?page=1` get?\n\n```js\nconst app = express();\napp.get('/products', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":1,\"type\":\"stringx\"}`","`{\"page\":\"1\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":1,"explanation":"The real response is `{\"page\":\"1\",\"type\":\"string\"}`."},{"prompt":"What JSON body does `GET /workouts/1` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":11}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"11\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `POST /tasks` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/tasks', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{\"id\":\"stats\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."}]
---
# What Does the Server Respond? #110

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
