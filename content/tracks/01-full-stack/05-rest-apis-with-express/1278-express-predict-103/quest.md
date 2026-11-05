---
slug: "express-predict-103"
title: "What Does the Server Respond? #103"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /hotels` get?\n\n```js\nconst app = express();\napp.post('/hotels', (req, res) => res.sendStatus(204));\n```","options":["404","500","204","400"],"answer":2,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /courses/2` get?\n\n```js\nconst app = express();\napp.use('/courses', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/courses/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/2\"}`","`{\"seen\":\"/2x\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What JSON body does `GET /repos/3` get?\n\n```js\nconst app = express();\napp.use('/repos', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/repos/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/3\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/3x\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"seen\":\"/3\"}`."},{"prompt":"What JSON body does `GET /flights/5` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":10}`","`{\"n\":11}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /cars/stats` get?\n\n```js\nconst app = express();\napp.get('/cars/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/cars/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"statsx\"}`","`{}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #103

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
