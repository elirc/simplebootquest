---
slug: "express-predict-85"
title: "What Does the Server Respond? #85"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /orders/1` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{}`","`{\"n\":\"11\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":11}`"],"answer":1,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /orders/2` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":22}`","`{\"n\":\"22\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /movies/4` get?\n\n```js\nconst app = express();\napp.use('/movies', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/movies/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"seen\":\"/4x\"}`","`{\"seen\":\"/4\"}`"],"answer":3,"explanation":"The real response is `{\"seen\":\"/4\"}`."},{"prompt":"What status code does `POST /recipes` get?\n\n```js\nconst app = express();\napp.post('/recipes', (req, res) => res.sendStatus(201));\n```","options":["500","201","404","200"],"answer":1,"explanation":"The real response is 201."},{"prompt":"What JSON body does `GET /books/stats` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/books/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #85

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
