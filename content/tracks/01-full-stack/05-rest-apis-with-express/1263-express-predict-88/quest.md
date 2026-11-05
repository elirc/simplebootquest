---
slug: "express-predict-88"
title: "What Does the Server Respond? #88"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /plants/2` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/plants/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`"],"answer":2,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /songs/2` get?\n\n```js\nconst app = express();\napp.use('/songs', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/songs/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/2x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/2\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What JSON body does `GET /tasks/stats` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tasks/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /events/2` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":5}`","`{\"n\":4}`","`{}`"],"answer":2,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What status code does `POST /tickets` get?\n\n```js\nconst app = express();\napp.post('/tickets', (req, res) => res.sendStatus(202));\n```","options":["500","204","404","202"],"answer":3,"explanation":"The real response is 202."}]
---
# What Does the Server Respond? #88

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
