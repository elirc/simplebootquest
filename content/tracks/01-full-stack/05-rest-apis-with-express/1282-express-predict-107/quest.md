---
slug: "express-predict-107"
title: "What Does the Server Respond? #107"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /songs` get?\n\n```js\nconst app = express();\napp.get('/songs', async () => {\n  throw new Error('db down');\n});\n```","options":["404","200","422","500"],"answer":3,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /tickets/stats` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tickets/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /events/3` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res, next) => {\n  if (req.params.id === '3') return next();\n  res.json({ from: 'first' });\n});\napp.get('/events/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /songs/stats` get?\n\n```js\nconst app = express();\napp.get('/songs/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/songs/stats', (req, res) => res.json({ count: 3 }));\n```","options":["`{}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /plants/stats` get?\n\n```js\nconst app = express();\napp.get('/plants/stats', (req, res) => res.json({ count: 4 }));\napp.get('/plants/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":5}`","`{}`"],"answer":0,"explanation":"The real response is `{\"count\":4}`."}]
---
# What Does the Server Respond? #107

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
