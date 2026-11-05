---
slug: "express-predict-16"
title: "What Does the Server Respond? #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: What Does the Server Respond?"
questions: [{"prompt":"What JSON body does `GET /recipes/stats` get?\n\n```js\nconst app = express();\napp.get('/recipes/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/recipes/stats', (req, res) => res.json({ count: 2 }));\n```","options":["`{\"id\":\"statsx\"}`","`{\"id\":\"stats\"}`","`{}`","`{\"got\":{\"name\":\"x\"}}`"],"answer":1,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `GET /products/stats` get?\n\n```js\nconst app = express();\napp.get('/products/:id', (req, res) => res.json({ id: req.params.id }));\napp.get('/products/stats', (req, res) => res.json({ count: 2 }));\n```","options":["`{\"id\":\"statsx\"}`","`{\"got\":{\"name\":\"x\"}}`","`{}`","`{\"id\":\"stats\"}`"],"answer":3,"explanation":"The real response is `{\"id\":\"stats\"}`."},{"prompt":"What JSON body does `POST /employees` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/employees', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{}`","`{\"id\":\"stats\"}`","`{\"got\":{\"name\":\"x\"}}`","`{\"got\":null}`"],"answer":3,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What JSON body does `POST /products` with body `{\"name\":\"x\"}` get?\n\n```js\nconst app = express();\napp.post('/products', (req, res) => res.status(201).json({ got: req.body ?? null }));\napp.use(express.json());\n```","options":["`{\"got\":null}`","`{\"got\":{\"name\":\"x\"}}`","`{\"id\":\"stats\"}`","`{}`"],"answer":0,"explanation":"The real response is `{\"got\":null}`."},{"prompt":"What status code does `POST /cars` get?\n\n```js\nconst app = express();\napp.post('/cars', (req, res) => res.sendStatus(201));\n```","options":["404","400","201","401"],"answer":2,"explanation":"The real response is 201."}]
---
# What Does the Server Respond? #16

Express runs middleware and routes **in the order they're registered**, and the first one that sends a response wins. Typical gotchas:

- A `/:id` route registered before `/stats` captures "stats" as an id.
- `req.body` is `undefined` unless `express.json()` runs *before* the route.
- `req.params` and `req.query` values are always **strings**.
- In Express 5, an async handler that throws is passed to the error middleware (or the default 500).
- A request that no route handles gets a 404.

Each answer was computed by actually running the app.
