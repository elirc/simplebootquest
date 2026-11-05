---
slug: "express-predict-1"
title: "What Does the Server Respond? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /cities` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/cities', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["422","400","200","204"],"answer":0,"explanation":"The real response is 422."},{"prompt":"What status code does `GET /students` get?\n\n```js\nconst app = express();\napp.get('/students', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["200","400","201","404"],"answer":0,"explanation":"The real response is 200."},{"prompt":"What JSON body does `GET /workouts/2` get?\n\n```js\nconst app = express();\napp.use('/workouts', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/workouts/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{}`","`{\"seen\":\"/2\"}`","`{\"seen\":\"/2x\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/2\"}`."},{"prompt":"What JSON body does `GET /books/stats` get?\n\n```js\nconst app = express();\napp.get('/books/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/books/stats', (req, res) => res.json({ count: 1 }));\n```","options":["`{}`","`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What status code does `POST /products` get?\n\n```js\nconst app = express();\napp.post('/products', (req, res) => res.sendStatus(201));\n```","options":["422","503","200","201"],"answer":3,"explanation":"The real response is 201."}]
---
# What Does the Server Respond? #1

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
