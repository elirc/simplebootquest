---
slug: "express-predict-122"
title: "What Does the Server Respond? #122"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /students/stats` get?\n\n```js\nconst app = express();\napp.get('/students/stats', (req, res) => res.json({ count: 4 }));\napp.get('/students/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"count\":4}`","`{\"count\":5}`"],"answer":2,"explanation":"The real response is `{\"count\":4}`."},{"prompt":"What status code does `POST /tickets` get?\n\n```js\nconst app = express();\napp.post('/tickets', (req, res) => res.sendStatus(204));\n```","options":["204","201","422","500"],"answer":0,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /courses/stats` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/courses/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /courses/5` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{}`","`{\"n\":10}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":11}`"],"answer":1,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /books/stats` get?\n\n```js\nconst app = express();\napp.get('/books/stats', (req, res) => res.json({ count: 4 }));\napp.get('/books/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{\"count\":5}`","`{\"count\":4}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"count\":4}`."}]
---
# What Does the Server Respond? #122

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
