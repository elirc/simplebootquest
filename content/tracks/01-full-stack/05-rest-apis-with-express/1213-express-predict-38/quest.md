---
slug: "express-predict-38"
title: "What Does the Server Respond? #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /songs/2` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"n\":4}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":5}`"],"answer":0,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What JSON body does `POST /orders` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/orders', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{}`","`{\"id\":\"stats\"}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `POST /events` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/events', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"got\":null}`"],"answer":1,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /movies/5` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/movies/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"secondx\"}`","`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /plants/1` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{\"n\":3}`","`{\"n\":2}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"n\":2}`."}]
---
# What Does the Server Respond? #38

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
