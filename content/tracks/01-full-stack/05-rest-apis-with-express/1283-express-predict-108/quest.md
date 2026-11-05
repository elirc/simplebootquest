---
slug: "express-predict-108"
title: "What Does the Server Respond? #108"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tasks/5` get?\n\n```js\nconst app = express();\napp.get('/tasks/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{}`","`{\"n\":55}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"55\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What status code does `DELETE /songs` get?\n\n```js\nconst app = express();\napp.get('/songs', (req, res) => res.json([]));\n```","options":["400","404","201","401"],"answer":1,"explanation":"The real response is 404."},{"prompt":"What JSON body does `GET /movies/3` get?\n\n```js\nconst app = express();\napp.use('/movies', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/movies/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/3x\"}`","`{\"seen\":\"/3\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/3\"}`."},{"prompt":"What JSON body does `GET /flights/stats` get?\n\n```js\nconst app = express();\napp.get('/flights/stats', (req, res) => res.json({ count: 5 }));\napp.get('/flights/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":6}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":5}`"],"answer":3,"explanation":"The real response is `{\"count\":5}`."},{"prompt":"What JSON body does `GET /tickets/2` get?\n\n```js\nconst app = express();\napp.use('/tickets', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/tickets/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/2\"}`","`{\"seen\":\"/2x\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/2\"}`."}]
---
# What Does the Server Respond? #108

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
