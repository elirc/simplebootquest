---
slug: "express-predict-17"
title: "What Does the Server Respond? #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /repos` get?\n\n```js\nconst app = express();\napp.get('/repos', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["503","204","422","200"],"answer":3,"explanation":"The real response is 200."},{"prompt":"What status code does `POST /flights` with body `{\"name\":\"no title\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/flights', (req, res) => {\n  if (!req.body.title) return res.status(422).json({ error: 'title' });\n  res.status(201).json(req.body);\n});\n```","options":["204","400","422","404"],"answer":2,"explanation":"The real response is 422."},{"prompt":"What status code does `POST /employees` get?\n\n```js\nconst app = express();\napp.post('/employees', (req, res) => res.sendStatus(204));\n```","options":["422","503","204","404"],"answer":2,"explanation":"The real response is 204."},{"prompt":"What JSON body does `GET /api/transactions` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/transactions', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"base\":\"/apix\",\"path\":\"/transactionsx\"}`","`{}`","`{\"base\":\"/api\",\"path\":\"/transactions\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/transactions\"}`."},{"prompt":"What status code does `DELETE /events` get?\n\n```js\nconst app = express();\napp.get('/events', (req, res) => res.json([]));\n```","options":["404","200","503","201"],"answer":0,"explanation":"The real response is 404."}]
---
# What Does the Server Respond? #17

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
