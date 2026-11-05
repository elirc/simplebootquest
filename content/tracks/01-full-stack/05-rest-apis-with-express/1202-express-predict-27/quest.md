---
slug: "express-predict-27"
title: "What Does the Server Respond? #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /movies` get?\n\n```js\nconst app = express();\napp.post('/movies', (req, res) => res.sendStatus(202));\n```","options":["422","202","503","401"],"answer":1,"explanation":"The real response is 202."},{"prompt":"What JSON body does `GET /movies/5` get?\n\n```js\nconst app = express();\napp.get('/movies/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"55\"}`","`{}`","`{\"n\":55}`"],"answer":1,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What status code does `POST /songs` get?\n\n```js\nconst app = express();\napp.post('/songs', (req, res) => res.sendStatus(204));\n```","options":["500","200","422","204"],"answer":3,"explanation":"The real response is 204."},{"prompt":"What status code does `POST /employees` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/employees', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["422","201","200","404"],"answer":0,"explanation":"The real response is 422."},{"prompt":"What JSON body does `POST /songs` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/songs', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{}`","`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."}]
---
# What Does the Server Respond? #27

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
