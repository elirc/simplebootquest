---
slug: "express-predict-25"
title: "What Does the Server Respond? #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `POST /tasks` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/tasks', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`","`{\"id\":\"stats\"}`"],"answer":2,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `GET /workouts/5` get?\n\n```js\nconst app = express();\napp.get('/workouts/:id', (req, res) => res.json({ n: Number(req.params.id) + 5 }));\n```","options":["`{}`","`{\"n\":11}`","`{\"n\":10}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"n\":10}`."},{"prompt":"What status code does `DELETE /transactions` get?\n\n```js\nconst app = express();\napp.get('/transactions', (req, res) => res.json([]));\n```","options":["401","400","503","404"],"answer":3,"explanation":"The real response is 404."},{"prompt":"What JSON body does `POST /cities` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/cities', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":null}`","`{}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What status code does `DELETE /repos` get?\n\n```js\nconst app = express();\napp.get('/repos', (req, res) => res.json([]));\n```","options":["204","404","503","200"],"answer":1,"explanation":"The real response is 404."}]
---
# What Does the Server Respond? #25

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
