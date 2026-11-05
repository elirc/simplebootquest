---
slug: "express-predict-59"
title: "What Does the Server Respond? #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /cars/4` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"44\"}`","`{\"n\":44}`"],"answer":2,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `POST /books` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/books', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":null}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":2,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /cars/3` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{}`","`{\"n\":6}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":7}`"],"answer":1,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What JSON body does `POST /songs` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/songs', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`","`{\"got\":null}`"],"answer":0,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /transactions/1` get?\n\n```js\nconst app = express();\napp.get('/transactions/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":11}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"11\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"n\":\"11\"}`."}]
---
# What Does the Server Respond? #59

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
