---
slug: "express-predict-104"
title: "What Does the Server Respond? #104"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /courses/stats` get?\n\n```js\nconst app = express();\napp.get('/courses/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/courses/stats', (req, res) => res.json({ count: 2 }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /recipes/5` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":10}`","`{}`","`{\"n\":11}`"],"answer":1,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What JSON body does `GET /plants/4` get?\n\n```js\nconst app = express();\napp.get('/plants/:id', (req, res) => res.json({ n: req.params.id + 4 }));\n```","options":["`{\"n\":\"44\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":44}`","`{}`"],"answer":0,"explanation":"The real response is `{\"n\":\"44\"}`."},{"prompt":"What JSON body does `GET /workouts/stats` get?\n\n```js\nconst app = express();\napp.get('/workouts/stats', (req, res) => res.json({ count: 3 }));\napp.get('/workouts/:id', (req, res) => res.json({ id: req.params.id }));\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"count\":4}`","`{\"count\":3}`"],"answer":3,"explanation":"The real response is `{\"count\":3}`."},{"prompt":"What JSON body does `GET /flights/2` get?\n\n```js\nconst app = express();\napp.get('/flights/:id', (req, res) => res.json({ n: req.params.id + 2 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"22\"}`","`{}`","`{\"n\":22}`"],"answer":1,"explanation":"The real response is `{\"n\":\"22\"}`."}]
---
# What Does the Server Respond? #104

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
