---
slug: "express-predict-84"
title: "What Does the Server Respond? #84"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /workouts` get?\n\n```js\nconst app = express();\napp.post('/workouts', (req, res) => res.sendStatus(201));\n```","options":["200","400","201","503"],"answer":2,"explanation":"The real response is 201."},{"prompt":"What JSON body does `GET /cities/5` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{}`","`{\"n\":11}`","`{\"n\":10}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /orders/4` get?\n\n```js\nconst app = express();\napp.use('/orders', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/orders/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"seen\":\"/4x\"}`","`{}`","`{\"seen\":\"/4\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What status code does `POST /flights` get?\n\n```js\nconst app = express();\napp.post('/flights', (req, res) => res.sendStatus(204));\n```","options":["200","201","400","204"],"answer":3,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /movies?page=2` get?\n\n```js\nconst app = express();\napp.get('/movies', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{}`","`{\"page\":\"2\",\"type\":\"string\"}`","`{\"page\":2,\"type\":\"stringx\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"page\":\"2\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #84

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
