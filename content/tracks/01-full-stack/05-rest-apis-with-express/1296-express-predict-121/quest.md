---
slug: "express-predict-121"
title: "What Does the Server Respond? #121"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /books/2` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"22\"}`","`{\"n\":22}`"],"answer":2,"explanation":"The real response is `{\"n\":\"22\"}`."},{"prompt":"What JSON body does `GET /students/1` get?\n\n```js\nconst app = express();\napp.get('/students/:id', (req, res) => res.json({ n: req.params.id + 1 }));\n```","options":["`{\"n\":\"11\"}`","`{}`","`{\"n\":11}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":\"11\"}`."},{"prompt":"What JSON body does `GET /events/1` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ n: Number(req.params.id) + 1 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":2}`","`{\"n\":3}`"],"answer":2,"explanation":"The real response is `{\"n\":2}`."},{"prompt":"What JSON body does `GET /cities/3` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: Number(req.params.id) + 3 }));\n```","options":["`{\"n\":6}`","`{}`","`{\"n\":7}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":6}`."},{"prompt":"What JSON body does `GET /transactions/stats` get?\n\n```js\nconst app = express();\napp.get('/transactions/stats', (req, res) => res.json({ count: 2 }));\napp.get('/transactions/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"count\":2}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":3}`"],"answer":1,"explanation":"The real response is `{\"count\":2}`."}]
---
# What Does the Server Respond? #121

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
