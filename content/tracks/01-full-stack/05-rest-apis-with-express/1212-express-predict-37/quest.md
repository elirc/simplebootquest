---
slug: "express-predict-37"
title: "What Does the Server Respond? #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /api/flights` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/flights', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{}`","`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/api\",\"path\":\"/flights\"}`","`{\"base\":\"/apix\",\"path\":\"/flightsx\"}`"],"answer":2,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/flights\"}`."},{"prompt":"What JSON body does `POST /events` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/events', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"id\":\"stats\"}`","`{\"got\":null}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What status code does `POST /cars` get?\n\n```js\nconst app = express();\napp.post('/cars', (req, res) => res.sendStatus(204));\n```","options":["404","204","503","400"],"answer":1,"explanation":"The real response is 204."},{"prompt":"What status code does `GET /movies` get?\n\n```js\nconst app = express();\napp.get('/movies', async () => {\n  throw new Error('db down');\n});\n```","options":["200","401","500","404"],"answer":2,"explanation":"The real response is 500."},{"prompt":"What JSON body does `GET /flights?page=5` get?\n\n```js\nconst app = express();\napp.get('/flights', (req, res) => res.json({ page: req.query.page, type: typeof req.query.page }));\n```","options":["`{\"page\":5,\"type\":\"stringx\"}`","`{}`","`{\"page\":\"5\",\"type\":\"string\"}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":2,"explanation":"The real response is `{\"page\":\"5\",\"type\":\"string\"}`."}]
---
# What Does the Server Respond? #37

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
