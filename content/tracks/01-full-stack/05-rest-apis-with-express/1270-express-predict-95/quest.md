---
slug: "express-predict-95"
title: "What Does the Server Respond? #95"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cars/1` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"11\"}`","`{}`","`{\"n\":11}`"],"answer":1,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tasks/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`","`{\"id\":\"statsx\"}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tasks/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /cars/2` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{}`","`{\"n\":22}`","`{\"n\":\"22\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `POST /cars` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/cars', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"got\":null}`","`{\"id\":\"stats\"}`"],"answer":2,"explanation":"The real response is `{\"got\":null}`."}]
---
# What Does the Server Respond? #95

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
