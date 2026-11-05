---
slug: "express-predict-2"
title: "What Does the Server Respond? #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /events/5` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res) => res.json({ n: req.params.id + 5 }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"n\":\"55\"}`","`{\"n\":55}`","`{}`"],"answer":1,"explanation":"The real response is `{\"n\":\"55\"}`."},{"prompt":"What JSON body does `POST /tickets` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/tickets', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What status code does `POST /students` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/students', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["404","422","200","401"],"answer":1,"explanation":"The real response is 422."},{"prompt":"What JSON body does `GET /cities/2` get?\n\n```js\nconst app = express();\napp.get('/cities/:id', (req, res) => res.json({ n: Number(req.params.id) + 2 }));\n```","options":["`{}`","`{\"n\":4}`","`{\"got\":{\"name\":\"x\"}}`","`{\"n\":5}`"],"answer":1,"explanation":"The real response is `{\"n\":4}`."},{"prompt":"What JSON body does `GET /api/students` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/students', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"base\":\"/apix\",\"path\":\"/studentsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/api\",\"path\":\"/students\"}`","`{}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/students\"}`."}]
---
# What Does the Server Respond? #2

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
