---
slug: "express-predict-23"
title: "What Does the Server Respond? #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `GET /movies` get?\n\n```js\nconst app = express();\napp.get('/movies', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["422","200","503","204"],"answer":2,"explanation":"The real response is 503."},{"prompt":"What JSON body does `POST /hotels` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/hotels', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{}`","`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`"],"answer":2,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What status code does `GET /flights` get?\n\n```js\nconst app = express();\napp.get('/flights', async () => {\n  throw new Error('db down');\n});\napp.use((err, req, res, next) => res.status(503).json({ error: 'try later' }));\n```","options":["500","200","204","503"],"answer":3,"explanation":"The real response is 503."},{"prompt":"What status code does `GET /books` get?\n\n```js\nconst app = express();\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\napp.get('/books', (req, res) => res.json([]));\n```","options":["201","401","400","500"],"answer":1,"explanation":"The real response is 401."},{"prompt":"What JSON body does `GET /api/books` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/books', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{}`","`{\"base\":\"/apix\",\"path\":\"/booksx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/api\",\"path\":\"/books\"}`"],"answer":3,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/books\"}`."}]
---
# What Does the Server Respond? #23

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
