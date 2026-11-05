---
slug: "express-predict-56"
title: "What Does the Server Respond? #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /events/2` get?\n\n```js\nconst app = express();\napp.get('/events/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/events/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"from\":\"second\"}`","`{\"from\":\"secondx\"}`","`{}`"],"answer":1,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `POST /cars` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.use(express.json());\napp.post('/cars', (req, res) => res.status(201).json({ got: req.body ?? null }));\n```","options":["`{\"got\":null}`","`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":3,"explanation":"The real response is `{\"got\":{\"name\":\"x\"}}`."},{"prompt":"What JSON body does `GET /recipes/4` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ n: Number(req.params.id) + 4 }));\n```","options":["`{\"n\":8}`","`{}`","`{\"n\":9}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":0,"explanation":"The real response is `{\"n\":8}`."},{"prompt":"What JSON body does `GET /tickets/2` get?\n\n```js\nconst app = express();\napp.get('/tickets/:id', (req, res, next) => {\n  if (req.params.id === '2') return next();\n  res.json({ from: 'first' });\n});\napp.get('/tickets/:id', (req, res) => res.json({ from: 'second' }));\n```","options":["`{\"from\":\"secondx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"from\":\"second\"}`"],"answer":3,"explanation":"The real response is `{\"from\":\"second\"}`."},{"prompt":"What JSON body does `GET /api/recipes` get?\n\n```js\nconst app = express();\nconst api = express.Router();\napi.get('/recipes', (req, res) => res.json({ base: req.baseUrl, path: req.path }));\napp.use('/api', api);\n```","options":["`{\"got\":{\"name\":\"x\"}}`","`{\"base\":\"/api\",\"path\":\"/recipes\"}`","`{}`","`{\"base\":\"/apix\",\"path\":\"/recipesx\"}`"],"answer":1,"explanation":"The real response is `{\"base\":\"/api\",\"path\":\"/recipes\"}`."}]
---
# What Does the Server Respond? #56

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
