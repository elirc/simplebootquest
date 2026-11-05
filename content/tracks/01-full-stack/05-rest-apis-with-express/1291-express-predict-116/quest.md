---
slug: "express-predict-116"
title: "What Does the Server Respond? #116"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets/5` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res, next) => {\n  if (req.params.id === '5') return next();\n  res.json({ from: 'first' });\n});\napp.get('/tickets/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"second\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"secondx\"}`"],"answer":0,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /courses/4` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"n\":44}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":\"44\"}`"],"answer":3,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /orders/2` get?\n\n```js\nconst app = express();\napp.get('/orders/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"n\":5}`","`{}`","`{\"n\":4}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What status code does `POST /hotels` get?\n\n```js\nconst app = express();\napp.post('/hotels', (req, res) => res.sendStatus(201));\n```","options":["200","422","201","503"],"answer":2,"explanation":"The real response is 201."},{"prompt":"What JSON body does `GET /recipes/stats` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/recipes/stats', (req, res) => res.json({ count: 4 }));\n```","options":["`{\"id\":\"statsx\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #116

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
