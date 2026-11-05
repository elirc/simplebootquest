---
slug: "express-predict-47"
title: "What Does the Server Respond? #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What status code does `POST /events` get?\n\n```js\nconst app = express();\napp.post('/events', (req, res) => res.sendStatus(201));\n```","options":["200","422","204","201"],"answer":3,"explanation":"The real response is 201."},{"prompt":"What JSON body does `GET /workouts/5` get?\n\n```js\nconst app = express();\napp.use('/workouts', (req, res, next) => {\n  res.set('X-Seen', req.path);\n  next();\n});\napp.get('/workouts/:id', (req, res) => res.json({ seen: res.get('X-Seen') }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"seen\":\"/5\"}`","`{}`","`{\"seen\":\"/5x\"}`"],"answer":1,"explanation":"The real response is `{\"seen\":\"/5\"}`."},{"prompt":"What status code does `GET /movies` get?\n\n```js\nconst app = express();\napp.get('/movies', (req, res) => res.json([]));\napp.use((req, res, next) => {\n  if (!req.get('authorization')) return res.status(401).json({ error: 'login' });\n  next();\n});\n```","options":["200","422","503","400"],"answer":0,"explanation":"The real response is 200."},{"prompt":"What JSON body does `GET /api/cars` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/cars', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/apix\",\"path\":\"/carsx\"}`","`{}`","`{\"base\":\"/api\",\"path\":\"/cars\"}`"],"answer":3,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/cars\"}`."},{"prompt":"What status code does `POST /flights` get?\n\n```js\nconst app = express();\napp.post('/flights', (req, res) => res.sendStatus(201));\n```","options":["422","400","201","401"],"answer":2,"explanation":"The real response is 201."}]
---
# What Does the Server Respond? #47

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
