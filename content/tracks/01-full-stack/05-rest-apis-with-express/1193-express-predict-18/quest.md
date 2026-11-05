---
slug: "express-predict-18"
title: "What Does the Server Respond? #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /tasks` get?\n\n```js\nconst app = express();\napp.post('/tasks', (req, res) => res.sendStatus(202));\n```","options":["204","202","200","400"],"answer":1,"explanation":"The real response is 202."},{"prompt":"What status code does `POST /movies` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/movies', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["400","401","200","422"],"answer":3,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /students/5` get?\n\n```js\nconst app = express();\napp.use('/students', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/students/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/5\"}`","`{\"seen\":\"/5x\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What JSON body does `POST /workouts` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/workouts', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":null}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":3,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /tickets?page=4` get?\n\n```js\nconst app = express();\napp.get('/tickets', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"page\":\"4\",\"type\":\"string\"}`","`{\"page\":4,\"type\":\"stringx\"}`"],"answer":2,"explanation":"The real response is `{\"page\":\"4\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #18

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
