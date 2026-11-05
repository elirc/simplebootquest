---
slug: "express-predict-63"
title: "What Does the Server Respond? #63"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets/1` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":11}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"11\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /employees/4` get?\n\n```js\nconst app = express();\napp.get('/employees/:id', (req, res, next) => {\n  if (req.params.id === '4') return next();\n  res.json({ from: 'first' });\n});\napp.get('/employees/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /hotels/4` get?\n\n```js\nconst app = express();\napp.use('/hotels', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/hotels/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/4x\"}`","`{}`","`{\"seen\":\"/4\"}`"],"answer":3,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What status code does `POST /movies` get?\n\n```js\nconst app = express();\napp.post('/movies', (req, res) => res.sendStatus(204));\n```","options":["201","204","401","500"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What JSON body does `POST /courses` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/courses', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`","`{\"got\":null}`"],"answer":0,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."}]
---
# What Does the Server Respond? #63

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
