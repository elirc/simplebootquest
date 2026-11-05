---
slug: "express-predict-127"
title: "What Does the Server Respond? #127"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /tickets/stats` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/tickets/stats', (req, res) => res.json({ count: 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /orders/3` get?\n\n```js\nconst app = express();\napp.use('/orders', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/orders/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/3\"}`","`{\"seen\":\"/3x\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/3\"}`."},{"prompt":"What JSON body does `GET /tickets/2` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"n\":5}`","`{\"n\":4}`"],"answer":3,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What status code does `POST /employees` get?\n\n```js\nconst app = express();\napp.post('/employees', (req, res) => res.sendStatus(202));\n```","options":["201","202","404","503"],"answer":1,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /events/stats` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/events/stats', (req, res) => res.json({ count: 5 }));\n```","options":["`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`"],"answer":0,"explanation":"The real response is `{\"id\":\"stats\"}`."}]
---
# What Does the Server Respond? #127

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
