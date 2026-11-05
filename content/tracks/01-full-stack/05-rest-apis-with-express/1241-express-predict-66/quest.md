---
slug: "express-predict-66"
title: "What Does the Server Respond? #66"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /orders` get?\n\n```js\nconst app = express();\napp.post('/orders', (req, res) => res.sendStatus(202));\n```","options":["404","204","201","202"],"answer":3,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /events/stats` get?\n\n```js\nconst app = express();\napp.get('/events/stats', (req, res) => res.json({ count: 1 }));\napp.get('/events/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":2}`","`{\"count\":1}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"count\":1}`."},{"prompt":"What JSON body does `GET /cars/stats` get?\n\n```js\nconst app = express();\napp.get('/cars/stats', (req, res) => res.json({ count: 4 }));\napp.get('/cars/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":4}`","`{\"count\":5}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"count\":4}`."},{"prompt":"What JSON body does `GET /repos/2` get?\n\n```js\nconst app = express();\napp.get('/repos/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{\"n\":4}`","`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":5}`"],"answer":0,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What JSON body does `GET /events/stats` get?\n\n```js\nconst app = express();\napp.get('/events/stats', (req, res) => res.json({ count: 4 }));\napp.get('/events/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":5}`","`{\"count\":4}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"count\":4}`."}]
---
# What Does the Server Respond? #66

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
